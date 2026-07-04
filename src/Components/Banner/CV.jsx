import { FaEye, FaDownload } from "react-icons/fa";

export default function CV() {
  const pdfUrl = "/resume.pdf";

  return (
    <div className="flex items-center gap-2">
      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
      >
        <FaEye />
        Resume
      </a>

      <a
        href={pdfUrl}
        download
        className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
      >
        <FaDownload />
       Download
      </a>
    </div>
  );
}