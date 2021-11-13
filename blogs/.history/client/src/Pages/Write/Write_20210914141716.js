import './write.css'
import image from '../../img/'
export default function Write() {
    return (
        <div className="write">
            <img className="writeImg" src="" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: 'none'}}/>
                    <input type="text" placeholder="Title"  className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." className="writeInput writeText"/>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
