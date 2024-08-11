import Card from "../../Components/Card/Card";


const Project = () => {
    return(<div className="flex 
    flex-col gap-3 items-start 
    
    ">
        <h2 className=" text-lg">NOSSOS PROJETOS</h2>
        <div className=" flex flex-row gap-3">
            <Card/>   
            <Card/>           
            <Card/>   
            <Card/>   
        </div>
        
    
    
    </div>)
}

export default Project;