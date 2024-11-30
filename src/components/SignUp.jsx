import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SignUp = () => {
   
        
        const {createUser} = useContext(AuthContext);

    const handleSugnUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log('form sign up',name, email, password);

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            const createAt = result?.user?.metadata.creationTime;
            const newUser = {name, email, createAt}
            // save new user info to the database
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log('user created to db', data)
                if(data.insertedId){
                    alert('user created in db')
                }
            })
        })
        .catch(error => {
            console.log('error', error)
        })
    }


    return (
     
        <div className='hero py-10'>
            <div className="flex bg-white rounded-md items-start">
                <div>
                    <img className='w-[404px] h-[665px] md:block hidden rounded-md' src="https://i.ibb.co/wWxHw2y/realistic-scene-with-clothes-neighborhood-yard-sale.jpg" alt="" />
                </div>

                <div className='shadow-2xl rounded-lg text-center p-6 md:w-[430px]'>
                    <h1 className='text-black font-bold text-2xl'>Create an account</h1>
                    <p className='my-5 text-black opacity-60 text-base md:text-xl font-semibold'>Setup a new account in a minute.</p>
                    <div >
                        <form onSubmit={handleSugnUp} className='space-y-5'>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 text-primary opacity-60">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                                </svg>
                                <input type="text" name='name' className="grow text-primary" placeholder="Username" />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                {/* <IoMdPhotos className='text-primary opacity-60' /> */}
                                <input type="text" name='photo' className="grow text-primary" placeholder="Photo URL" />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 text-primary opacity-60">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="email" name='email' className="grow text-primary" placeholder="Email" />
                            </label>

                            <label className="input input-bordered relative flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 text-primary opacity-60">
                                    <path
                                        fillRule="evenodd"
                                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type='password' name='password' placeholder='Password' className='text-primary' />

                            </label>

                            <div className="form-control">
                                <label className="label justify-start gap-3 cursor-pointer">
                                    <input type="checkbox" name="terms" className="checkbox checkbox-primary" />
                                    <span className="label-text text-lg">Accept Term and condition</span>
                                </label>
                            </div>

                            <div className='w-full'>
                                <button className='btn btn-block bg-indigo-400   text-white text-xl font-bold'>Register</button>
                            </div>
                        </form>
                        <div className="divider text-secondary">OR</div>
                        <div className='flex justify-center items-center gap-5'>
                            <button><img src="https://i.ibb.co/9VP9JBh/icons8-facebook-48.png" alt="" /></button>
                            <button><img src="https://i.ibb.co/TcB5YZK/icons8-google-48.png" alt="" /></button>
                            <button><img className='w-12' src="https://i.ibb.co/vV2LMGC/icons8-github-30.png" alt="" /></button>
                        </div>
                        <div>
                            <p className='text-center text-base pt-3 md:text-lg '><span className='text-black opacity-60 ml-8'>Already have an account?</span> <Link to='/signin' className='text-blue-500 hover:underline'>Login here</Link></p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default SignUp;