import leetcodeIcon from '../assets/leetcode.svg'
import githubIcon from '../assets/github.svg'
import codechefIcon from '../assets/codechef.svg'

function ProfilesCards() {
  return (
    <div className="max-w-xl mx-auto bg-white rounded-xl  overflow-hidden shadow-md md:max-w-2xl lg:max-w-4xl">
      <div className="md:flex justify-evenly p-8">
          <div className="flex flex-col">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Coding Profile Links</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Also Explore my Projects</a>
          </div>
          <div className="flex space-x-4 justify-center border-2 gap-5 px-4 mt-4 py-2 rounded-xl bg-gray-100">
            <a href="https://leetcode.com/u/just__do__it" target="_blank" rel="noopener noreferrer">
                <img className="h-10 w-10" src={leetcodeIcon} alt="LeetCode" />
            </a>
            <a href="https://github.com/zaidiyazdan" target="_blank" rel="noopener noreferrer">
                <img className="h-10 w-10" src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://www.codechef.com/users/zaidiyazda" target="_blank" rel="noopener noreferrer">
                <img className="h-12 w-12" src={codechefIcon} alt="CodeChef" />
            </a>
    </div>
      </div>
    </div>
  );
}

export default ProfilesCards;
