'use client';

import { useState, useEffect, useMemo } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis } from 'recharts';

const COLORS = ['#06b6d4', '#8b5cf6', '#ec4899', '#3b82f6', '#10b981'];

const ALL_QUESTIONS: { [key: string]: string } = {
  "2": "Sexe / genre",
  "3": "Nationalité",
  "4": "Ville de résidence",
  "5": "Prénom ou pseudonyme",
  "6": "Âge",
  "7": "Orientation sexuelle",
  "8": "Situation",
  // Ajoute ici les autres titres si tu veux : "9": "Avez-vous déjà eu des rapports ?", ...
};

// Gère les deux formats : { answers: {...}, otherInputs, conditionalInputs } ou format à plat
const getAnswers = (sub: any) => sub?.answers?.answers ?? sub?.answers;
const getOther = (sub: any) => sub?.answers?.otherInputs ?? {};
const getConditional = (sub: any) => sub?.answers?.conditionalInputs ?? {};

const sortKeys = (a: string, b: string) => {
  const na = Number(a), nb = Number(b);
  return isNaN(na) || isNaN(nb) ? a.localeCompare(b) : na - nb;
};

export default function AdminPage() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchData() {
      try {
        const password = window.prompt('Mot de passe admin :') || '';
        const response = await fetch('/api/admin/submissions', {
          headers: { 'x-admin-password': password },
        });

        if (response.status === 401) {
          throw new Error('Mot de passe incorrect. Recharge la page pour réessayer.');
        }
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données.');
        }

        const data = await response.json();
        setSubmissions(data);
      } catch (err: any) {
        setErrorMessage(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredSubmissions = useMemo(() => {
    return submissions.filter((sub) => {
      const searchString = `${sub.id} ${sub.created_at} ${JSON.stringify(getAnswers(sub))}`.toLowerCase();
      return searchString.includes(searchTerm.toLowerCase());
    });
  }, [submissions, searchTerm]);

  const statsDateData = useMemo(() => {
    const counts: { [key: string]: number } = {};
    submissions.forEach((sub) => {
      if (!sub.created_at) return;
      const date = sub.created_at.split('T')[0];
      counts[date] = (counts[date] || 0) + 1;
    });
    return Object.keys(counts).map((date) => ({ name: date, value: counts[date] }));
  }, [submissions]);

  const statsGenderData = useMemo(() => {
    const counts: { [key: string]: number } = {};
    submissions.forEach((sub) => {
      const a = getAnswers(sub);
      if (!a || typeof a !== 'object') return;

      const genderKey = Object.keys(a).find((k) => {
        const lowerK = k.toLowerCase();
        return lowerK.includes('sexe') || lowerK.includes('genre') || lowerK.includes('gender') || k === '2';
      });

      if (genderKey) {
        const val = a[genderKey];
        const cleanVal =
          typeof val === 'object' && val !== null
            ? val.answer || val.value || JSON.stringify(val)
            : String(val).trim();
        if (cleanVal) counts[cleanVal] = (counts[cleanVal] || 0) + 1;
      }
    });
    return Object.keys(counts).map((key) => ({ name: key, count: counts[key] }));
  }, [submissions]);

  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);
  const paginatedSubmissions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredSubmissions.slice(start, start + itemsPerPage);
  }, [filteredSubmissions, currentPage]);

  const exportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(submissions, null, 2));
    const a = document.createElement('a');
    a.setAttribute('href', dataStr);
    a.setAttribute('download', `quiz_submissions_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const exportCSV = () => {
    if (submissions.length === 0) return;
    const headers = ['ID', 'Date', 'Answers'];
    const rows = submissions.map((sub) => [
      sub.id,
      sub.created_at,
      `"${JSON.stringify(sub.answers).replace(/"/g, '""')}"`,
    ]);
    const csvContent =
      'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const link = document.createElement('a');
    link.setAttribute('href', encodeURI(csvContent));
    link.setAttribute('download', `quiz_submissions_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Chargement du tableau de bord...</div>;
  }

  const selectedAnswers = selectedSubmission ? getAnswers(selectedSubmission) : null;
  const selectedOther = selectedSubmission ? getOther(selectedSubmission) : {};
  const selectedConditional = selectedSubmission ? getConditional(selectedSubmission) : {};

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Tableau de bord - Quiz Submissions</h1>
          <p className="text-sm text-gray-500">Total des soumissions : {submissions.length}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={exportCSV} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition shadow-sm">
            📄 Exporter en CSV
          </button>
          <button onClick={exportJSON} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition shadow-sm">
            📊 Exporter en JSON
          </button>
        </div>
      </div>

      {errorMessage && (
        <div className="p-4 bg-red-100 text-red-700 rounded-md text-sm">{errorMessage}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {submissions.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Soumissions par jour</h2>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={statsDateData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={5} dataKey="value" label>
                    {statsDateData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {submissions.length > 0 && (
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">Répartition par Sexe / Genre</h2>
              <span className="text-xl">👥</span>
            </div>
            <div className="h-64 w-full">
              {statsGenderData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={statsGenderData}>
                    <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                    <YAxis stroke="#888888" fontSize={12} allowDecimals={false} />
                    <Tooltip />
                    <Bar dataKey="count" fill="#06b6d4" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-gray-400 text-sm text-center px-4">
                  <p>Aucune donnée de genre détectée.</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <input
          type="text"
          placeholder="Rechercher par ID, réponses..."
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-black"
        />
        <div className="text-sm text-gray-500">Résultats : {filteredSubmissions.length}</div>
      </div>

      <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date & Heure</th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Aperçu Réponses</th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {paginatedSubmissions.map((sub: any) => (
                <tr key={sub.id} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{sub.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(sub.created_at).toLocaleString('fr-FR')}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">
                    {JSON.stringify(getAnswers(sub))}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => setSelectedSubmission(sub)}
                      className="text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-md transition"
                    >
                      Détails
                    </button>
                  </td>
                </tr>
              ))}
              {paginatedSubmissions.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-sm text-gray-500">
                    Aucune soumission trouvée.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {totalPages > 1 && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded bg-white text-sm disabled:opacity-50 text-black"
            >
              Précédent
            </button>
            <span className="text-sm text-gray-600">Page {currentPage} sur {totalPages}</span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded bg-white text-sm disabled:opacity-50 text-black"
            >
              Suivant
            </button>
          </div>
        )}
      </div>

      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-lg font-bold text-gray-800">Détails de la soumission #{selectedSubmission.id}</h3>
              <button onClick={() => setSelectedSubmission(null)} className="text-gray-400 hover:text-gray-600 text-xl font-bold">&times;</button>
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <span className="font-semibold text-gray-700">Date de soumission :</span>
                <p className="text-gray-600">{new Date(selectedSubmission.created_at).toLocaleString('fr-FR')}</p>
              </div>
              <div>
                <span className="font-semibold text-gray-700 mb-2 block">Toutes les réponses :</span>
                <div className="bg-gray-50 p-4 rounded-xl border space-y-3 max-h-[50vh] overflow-y-auto">
                  {typeof selectedAnswers === 'object' && selectedAnswers !== null ? (
                    Object.entries(selectedAnswers)
                      .sort(([a], [b]) => sortKeys(a, b))
                      .map(([key, value]) => {
                        const questionText = ALL_QUESTIONS[key] || `Question ${key}`;
                        const answerText =
                          typeof value === 'object' && value !== null && (value as any).answer !== undefined
                            ? (value as any).answer
                            : value;
                        const other = selectedOther[key];
                        const conditional = selectedConditional[key];

                        return (
                          <div key={key} className="border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide block mb-1">
                              {questionText}
                            </span>
                            <span className="text-sm font-semibold text-gray-900 bg-white px-3 py-1.5 rounded border border-gray-100 block">
                              {typeof answerText === 'object' ? JSON.stringify(answerText) : String(answerText)}
                            </span>
                            {other && (
                              <span className="text-xs text-purple-700 block mt-1">Précision (Autre) : {other}</span>
                            )}
                            {conditional && (
                              <span className="text-xs text-blue-700 block mt-1">Précision : {conditional}</span>
                            )}
                          </div>
                        );
                      })
                  ) : (
                    <p className="text-gray-600">{String(selectedAnswers)}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-end pt-3 border-t">
              <button
                onClick={() => setSelectedSubmission(null)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-sm font-medium transition"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}