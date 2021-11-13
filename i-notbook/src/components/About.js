import React, {useContext} from 'react';
import NoteContext from '../context/notes/NoteContext';
const About = () => {
    const noteState = useContext(NoteContext);

    return ( 
        <>
            <h1> This is About - iNotebook</h1>
            {/* <h3>{noteState.name} is a {noteState.designation} 
                at {noteState.company} currently working in {noteState.projectName} project.</h3> */}
        </>
    );
}
 
export default About;