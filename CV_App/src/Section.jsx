import './App.css'

function Section({children, ...props}) {

    return(
        <div className = {"sectionAll" + " " + props.add}>
            <h1> {props.title} </h1>
            <div className='section ' >
                {children}
            </div>
        </div>
    )
        
}

export default Section