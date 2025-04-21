import '../Styles/Register.css'


function Register() {

    return (
        <>
            <div className='regContainer'>
                <img className="flower" src="src/assets/flower-reg.png" alt="" />
                <div className='regBox'>
                    <p>Type in any name you’d like. I’m only using it to keep track of visitors here ^^ </p>
                    <div className='nameBox'>
                        <input type="text" name="name" id="name" placeholder='Any name works!' /> 
                    </div>
                    <button className='submitName'>
                        Next
                    </button>
                </div>
            </div>
        </>
    )
} 

export default Register;