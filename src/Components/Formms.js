function Formms ({label, placeholdertxt}){
    return(
        <form className="w-96 h-28 border-2 border-black pt-4 p-4">
            <label className="text-xl">
                {label}
                <input 
                className="border-2 border-black pl-2"
                type="text" placeholder={placeholdertxt}/>
            </label>
            </form>
    )
};
export default Formms;





