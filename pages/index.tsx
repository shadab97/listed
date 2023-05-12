import Image from 'next/image';
import { Inter } from 'next/font/google';
export default function Home() {
  const signInOption = [
    {
      imgSrc: 'google.svg',
      text: 'Sign in with Google',
    },
    {
      imgSrc: 'apple.svg',
      text: 'Sign in with Apple',
    },
  ];
  return (
    <main className="flex flex-col md:flex-row min-h-screen h-screen justify-between items-center">
      <section className="w-full md:w-[30vw] h-1/4  md:h-full bg-black flex justify-center items-center">
        <h1 className={`font-primary text-white font-bold text-7xl`}>Board.</h1>
      </section>
      <section className="w-full px-4  md:w-[70vw] h-3/4 md:h-full  bg-half_white flex justify-center flex-col items-center">
        <div className="my-8 md:m-auto ">
          <div className="mt-8 md:m-auto">
            <h2
              className={`font-primary  text-center md:text-left text-black font-bold text-4xl`}
            >
              Sign In
            </h2>
            <p
              className={`font-secondary text-center md:text-left text-black font-normal text-base mt-1`}
            >
              Sign in to your account
            </p>
          </div>
          <div className="flex gap-x-6 my-6">
            {signInOption.map((each, i) => (
              <div
                key={each.imgSrc}
                className="bg-white flex py-2 px-5 rounded-xl space-x-2 cursor-pointer"
              >
                <Image src={each.imgSrc} width={14} height={14} alt="" />
                <p className="font-light text-xs font-primary">{each.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-white p-7  rounded-2xl">
            <form action="" className="space-y-4">
              <div className="">
                <label
                  className="block text-black font-secondary font-normal text-base mb-1"
                  htmlFor="email"
                >
                  Email Address
                </label>

                <input
                  className=" outline-none bg-grey_light px-4 py-2 rounded-lg w-full "
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  id=""
                />
              </div>
              <div className="">
                <label
                  className="block text-black font-secondary font-normal text-base mb-1"
                  htmlFor="password"
                >
                  Password
                </label>

                <input
                  className=" bg-grey_light px-4 py-2 rounded-lg w-full "
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <a className=" text-blue-500" href="#">
                  Forgot password?
                </a>
              </div>
              <button className="w-full text-base font-bold font-primary bg-black text-center text-white font-primary px-4 py-2 rounded-lg">
                Sign In
              </button>
            </form>
          </div>
          <p className="my-4 text-center">
            Don’t have an account?{' '}
            <a className="font-secondary text-base text-blue-500" href="#">
              Register here
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
