import { useState, useEffect, Fragment } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from '@heroicons/react/20/solid';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [sidebar, setSidebarOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
  axios.get('http://localhost:3000/api/todos')
  .then((data) => {
    //console.log(data, "data");//
    setTodos(data.data);
  })
  .catch((error) => console.log(error, "error"));
  }, []);

  useEffect(() => {
  console.log(todos, "todos");
  }, [todos]);

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-white-900 sm:truncate sm:text-3xl sm:tracking-tight text-left">
          ToDo List
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-white-500">
            <BriefcaseIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-white-400"
              aria-hidden="true"
            />
            Важные задачи
          </div>
          <div className="mt-2 flex items-center text-sm text-white-500">
            <CalendarIcon
              className="mr-1.5 h-5 w-5 flex-shrink-0 text-white-400"
              aria-hidden="true"
            />
            17 Января, 2024
          </div>
          <span className="hidden sm:block">
          <button
            type="button"
            className="inline-flex items-center rounded-md bg-pink-500 px-3 py-2 text-sm font-semibold text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-white-50"
          >
            <PencilIcon
              className="-ml-0.5 mr-1.5 h-5 w-5 text-white-400"
              aria-hidden="true"
            />
            Создать новую заметку
          </button>
        </span>
        </div>
        <br></br>
        <fieldset>
          <legend className="sr-only">Notifications</legend>
          <div className="space-y-5 text-left">
            {todos.map((todo) => {
              return (
              <>
                {todo?.id} - {todo?.name} - {todo?.isDone}
              </>
              
              );
            })}
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white-300 text-white-600 focus:ring-white-600 "
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-white-1500">
                  Задача
                </label>
                <p id="comments-description" className="text-white-500">
                  Содержание задачи
                </p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="candidates"
                  aria-describedby="candidates-description"
                  name="candidates"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white-300 text-white-600 focus:ring-white-600"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label
                  htmlFor="candidates"
                  className="font-medium text-white-1500"
                >
                  Задача
                </label>
                <p id="candidates-description" className="text-white-500">
                  Содержание задачи
                </p>
              </div>
            </div>
            <div className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  id="offers"
                  aria-describedby="offers-description"
                  name="offers"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white-300 text-white-600 focus:ring-white-600"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <label htmlFor="offers" className="font-medium text-white-1500">
                  Задача
                </label>
                <p id="offers-description" className="text-white-500">
                   Содержание задачи
                </p>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      
      <div className="mt-5 flex lg:ml-4 lg:mt-0">
        

        {/* Dropdown */}
        <Menu as="div" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
            More
            <ChevronDownIcon
              className="-mr-1 ml-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 -mr-1 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700'
                    )}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>

      </div>
      
    </div>
  );
}
