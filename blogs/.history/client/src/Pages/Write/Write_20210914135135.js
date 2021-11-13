import './write.css'

export default function Write() {
    return (
        <div className="write">
            <form className="writeForm">
                <div className="writeFormGroup">
                    <input type="file" id="fileInput" />
                    <input type="text" placeholder="title" />

                </div>
            </form>
        </div>
    )
}
