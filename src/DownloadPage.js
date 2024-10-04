import { useParams } from 'react-router-dom';


export default function DownloadPage() {
    const { filename } = useParams();  // Get the filename from the URL

    window.location.href = `/${filename}`;

    return (
        <div className="flex flex-col space-y-8 mx-4 justify-center items-center min-h-screen retro">
            <h1 className="text-5xl">Downloading {filename}...</h1>
        </div>
    );
};
