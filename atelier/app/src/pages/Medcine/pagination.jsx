const PaginationControl = ({ totalPages, currentPage, onPageChange }) => {
    return (
      <div className="flex items-center bottom-11 justify-center mt-6 space-x-1">
        <button
          onClick={() => onPageChange(1)}
          disabled={currentPage === 1}
          className={`w-8 h-8 flex justify-center items-center rounded border ${currentPage === 1 ? 'border-slate-300 text-slate-500' : 'border-slate-600 text-slate-900 hover:bg-slate-200'}`}
        >
          «
        </button>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index + 1)}
            className={`w-8 h-8 flex justify-center items-center rounded border ${currentPage === index + 1 ? 'bg-green-cyan text-white' : 'border-slate-600 text-slate-900 hover:bg-slate-200'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => onPageChange(totalPages)}
          disabled={currentPage === totalPages}
          className={`w-8 h-8 flex justify-center items-center rounded border ${currentPage === totalPages ? 'border-slate-200 text-slate-500' : 'border-slate-600 text-slate-900 hover:bg-slate-200'}`}
        >
          »
        </button>
      </div>
    );
  };
  export default PaginationControl
