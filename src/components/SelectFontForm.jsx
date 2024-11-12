import fonts from '../assets/data/fonts.json';

export default function SelectFontForm() {

    function selectFont() { }

    return (
        <form className='edit__text-select'>
            <label htmlFor="selectFont">Выберите шрифт: </label>
            <select name="font" id="selectFont" onSelect={selectFont}>
                {fonts.map((font) => {
                    return <option value={font.name} key="">{font.name}</option>
                })}
            </select>
        </form>
    )
}