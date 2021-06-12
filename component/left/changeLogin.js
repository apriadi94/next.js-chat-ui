import { useContext, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { AuthContext } from '../../provider/authProvider'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ChangeLogin({ listContact }) {
    const { setAuth, connectToSocket, socket } = useContext(AuthContext)
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full">
                <img className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white" src="https://i.picsum.photos/id/3/200/300.jpg?hmac=o1-38H2y96Nm7qbRf8Aua54lF97OFQSHR41ATNErqFc"/>
            </Menu.Button>
          </div>

          <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="z-50 origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                  {
                      listContact.map((list, index) => 
                        <Menu.Item key={index} onClick={() => {
                            socket.disconnect()
                            setAuth({
                                token: 'berenang_renang_ketepian', 
                                userId: list.id, 
                                username: list.name, 
                                profileImage : list.profileImage
                            })
                        }}>
                            {({ active }) => (
                                <a
                                href="#"
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}
                                >
                                {list.name}
                                </a>
                            )}
                        </Menu.Item>
                      )
                  }
                
               
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}