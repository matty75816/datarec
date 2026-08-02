'use client';

import { useState, useMemo } from 'react';

export default function DashboardClient({ initialSubmissions }: { initialSubmissions: any[] }) {
  const [submissions, setSubmissions] = useState(initialSubmissions);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState<any | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Filtrage intelligent basé sur la recherche textuelle
  const filteredSubmissions = useMemo(() => {
    return submissions.filter((sub) => {
      const searchString = `${sub.id} ${sub.created_at} ${JSON.stringify(sub.answers)} ${JSON.stringify(sub.otherInputs)}`.toLowerCase();
      return searchString.includes(searchTerm.toLowerCase());
    });
  }, [submissions, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredSubmissions.length / itemsPerPage);
  const paginatedSubmissions = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredSubmissions.slice(start, start + itemsPerPage);
  }, [filteredSubmissions, currentPage]);

  // --- FONCTIONS D'EXPORTATION ---

  // 1. Export JSON
  const exportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(submissions, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `quiz_submissions_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // 2. Export CSV
  const exportCSV = () => {
    if (submissions.length === 0) return;
    
    const headers = ['ID', 'Date', 'Answers', 'Conditional Inputs', 'Other Inputs'];
    const rows = submissions.map(sub => [
      sub.id,
      sub.created_at,
      `"${JSON.stringify(sub.answers).replace(/"/g, '""')}"`,
      `"${JSON.stringify(sub.conditionalInputs || {}).replace(/"/g, '""')}"`,
      `"${JSON.stringify(sub.otherInputs || {}).replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `quiz_submissions_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  // 3. Export Impression / Rapport PDF natif du navigateur
  const exportPrintPDF = () => {
    window.print();
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/* En-tête et Actions d'Export */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Tableau de bord - Quiz Submissions</h1>
          <p className="text-sm text-gray-500">Total des soumissions enregistrées : {submissions.length}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button onClick={exportCSV} className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition shadow-sm">
            📄 Exporter en CSV
          </button>
          <button onClick={exportJSON} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition shadow-sm">
            📊 Exporter en JSON
          </button>
          <button onClick={exportPrintPDF} className="px-4 py-2 bg-slate-700 hover:bg-slate-800 text-white text-sm font-medium rounded-lg transition shadow-sm">
            🖨️ Imprimer / PDF
          </button>
        </div>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="flex items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <input
          type="text"
          placeholder="Rechercher par ID, réponses, texte..."
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
          className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        />
        <div className="text-sm text-gray-500">
          Affichage de {paginatedSubmissions.length} sur {filteredSubmissions.length} résultats filtrés
        </div>
      </div>

      {/* Tableau principal */}
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
                    {JSON.stringify(sub.answers)}
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

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded bg-white text-sm disabled:opacity-50"
            >
              Précédent
            </button>
            <span className="text-sm text-gray-600">
              Page {currentPage} sur {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded bg-white text-sm disabled:opacity-50"
            >
              Suivant
            </button>
          </div>
        )}
      </div>

      {/* Modale de détails d'une soumission */}
      {selectedSubmission && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
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
                <span className="font-semibold text-gray-700">Answers (JSON) :</span>
                <pre className="bg-gray-50 p-3 rounded-lg text-xs overflow-x-auto border mt-1">
                  {JSON.stringify(selectedSubmission.answers, null, 2)}
                </pre>
              </div>
              {selectedSubmission.conditionalInputs && Object.keys(selectedSubmission.conditionalInputs).length > 0 && (
                <div>
                  <span className="font-semibold text-gray-700">Conditional Inputs (JSON) :</span>
                  <pre className="bg-gray-50 p-3 rounded-lg text-xs overflow-x-auto border mt-1">
                    {JSON.stringify(selectedSubmission.conditionalInputs, null, 2)}
                  </pre>
                </div>
              )}
              {selectedSubmission.otherInputs && Object.keys(selectedSubmission.otherInputs).length > 0 && (
                <div>
                  <span className="font-semibold text-gray-700">Other Inputs (JSON) :</span>
                  <pre className="bg-gray-50 p-3 rounded-lg text-xs overflow-x-auto border mt-1">
                    {JSON.stringify(selectedSubmission.otherInputs, null, 2)}
                  </pre>
                </div>
              )}
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