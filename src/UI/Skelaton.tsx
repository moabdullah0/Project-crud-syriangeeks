import { Transition } from '@headlessui/react'


interface Props{
    loading: boolean;
    index: number;
}
const Skelaton = ({loading,index}:Props) => {
  return (
    <div key={index}>
    <Transition
      show={loading}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div>
        <div className="h-56 w-full bg-gray-300 animate-pulse"></div>
        <div className="px-3 pt-5">
          <div className="h-6 bg-gray-300 animate-pulse rounded w-2/3 mb-3"></div>
          <div className="h-4 bg-gray-300 animate-pulse rounded w-1/2 mb-3"></div>
          <div className="h-4 bg-gray-300 animate-pulse rounded w-1/3 mb-3"></div>
        </div>
      </div>
    </Transition>
  </div>
  )
}

export default Skelaton
