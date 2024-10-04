import { useParams } from 'react-router-dom';


export default function DownloadPage() {
    const { filename } = useParams();  // Get the filename from the URL

    window.location.href = `/${filename}`;

    return (
        <div>
            <p>Downloading {filename}...</p>
        </div>
    );
};
