import track_list from "../helpers/trackList";
import Track from "../components/track/Track";


function ProjectPage() {
    return (
        <div className="Project">
            {track_list.map((track, index) => {
                return <Track key={index} name={track.name} genre={track.genre} img={track.img}/>;
            })}
        </div>
    );
}

export default ProjectPage;

// In the functions of MAP we go around the dictionary and 
// add the index so that there is no error out.
