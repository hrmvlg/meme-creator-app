import ImageUploader from "./components/ImageUploader";
import SaveButton from './components/SaveButton';
import SelectFontForm from "./components/SelectFontForm";
import TextInput from "./components/TextInput";

export default function App() {
    return (
        <div className="container">
            <div className="edit">
                <div className="edit__image">
                    <div className="edit__no-image-text">Добавьте картинку</div>
                </div>
                <div className="edit__text">
                    <TextInput />
                    <SelectFontForm />
                </div>

            </div>
            <div className="action-buttons">
                <ImageUploader />
                <SaveButton />
            </div>


        </div>
    )
}