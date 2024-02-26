import Atropos from 'atropos/react';
import 'atropos/atropos.css';

export default function Component() {

    const videos = [
        {
            id: 1,
            videoUrl: "https://vm.tiktok.com/ZMMddt1oe/",
            thumbnail: "/video1Cover.webp",
        },
        {
            id: 2,
            videoUrl: "https://vm.tiktok.com/ZMMddfEWj/",
            thumbnail: "/video2Cover.webp"
        },
        {
            id: 3,
            videoUrl: "https://vm.tiktok.com/ZMMdd45pr/",
            thumbnail: "/video3Cover.webp"
        },
        {
            id: 4,
            videoUrl: "https://vm.tiktok.com/ZMMddcFkn/",
            thumbnail: "/video4Cover.webp"
        },
        {
            id: 5,
            videoUrl: "https://vm.tiktok.com/ZMMddCrW1/",
            thumbnail: "/video5Cover.webp"
        },
        {
            id: 6,
            videoUrl: "https://vm.tiktok.com/ZMMddnLRT/",
            thumbnail: "/video6Cover.webp"
        }
    ];

    return (
        <div className="flex flex-col w-full justify-center items-center">
            <p className="text-xl text-gray-700 dark:text-gray-400 justify-center items-center p-5 mt-5 mb-5">
                Aprende con los videos que comparto en TikTok, haz clic en la imagen para ver el video completo.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {videos.map((video) => (
                    <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="atropos-rotate block w-full h-full">
                        <Atropos key={video.id} className="my-atropos" activeOffset={40} shadowScale={1.05}>

                            <img src={video.thumbnail} alt="Miniatura del video de TikTok" className="atropos-scale w-full h-auto" />

                        </Atropos>
                    </a>
                ))}
            </div>
        </div>
    );
}
