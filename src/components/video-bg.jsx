import React from 'react'
import ReactPlayer from 'react-player';


export default function VideoBg()
{
    const videoUrl = '../images/bg-video.mp4';
    return (
        <>
            <div className='video-box' style={{ alignItems:'center', justifyContent:'center', display:'flex', position:'relative',height:'500px' }}>
                
                <div style={{ width: '100%' }}>
                    
                    <ReactPlayer
                        url={videoUrl}
                        playing={true}
                        loop={true}
                        muted={true}
                        controls={false}
                        width="100%"
                        height="auto"
                    />
                </div>
            </div>
        </>
    )
}