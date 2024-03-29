import React from "react";

const Projects = () => {
  return (
    <div className="mb-8">
      <div className="border-b border-neutral-900 pb-4 lg:mb-8">
        <h2 className="my-8 text-center text-4xl">Projects</h2>
      </div>

      {/* Project 1 */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-center mb-8">
        <div className="w-full lg:w-1/4">
          <img
            src="public\amazon.webp"
            width="150"
            height="150"
            alt="Amazon UI Clone"
            className="mb-6 rounded"
          />
        </div>
        <div className="w-full lg:w-3/4 lg:pl-8">
          <h3 className="mb-2 text-xl font-semibold">Amazon UI Clone</h3>
          <p className="mb-4 text-neutral-400">
            A simple basic UI clone of Amazon homepage using HTML and CSS.
          </p>
          <div className="mb-4 flex flex-wrap">
            <span className="mr-2 mb-2 h-8 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
              HTML
            </span>
            <span className="mr-2 mb-2 h-8 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
              CSS
            </span>
          </div>
          <a href="https://amazon-frontend-clone-rust.vercel.app/">
            <button className="h-8 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
              Live
            </button>
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-center mb-8">
        <div className="w-full lg:w-1/4">
          <img
            src="public\todolist.webp"
            width="150"
            height="150"
            alt="To Do List"
            className="mb-6 rounded"
          />
        </div>
        <div className="w-full lg:w-3/4 lg:pl-8">
          <h3 className="mb-2 text-xl font-semibold">To Do List</h3>
          <p className="mb-4 text-neutral-400">
            Built a To Do List app with features such as adding a task, deleting
            a task, and prioritizing tasks by moving them up and down the list
            items.
          </p>
          <div className="mb-4 flex flex-wrap">
            <span className="mr-2 mb-2 h-8 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
              React
            </span>
            <span className="mr-2 mb-2 h-8 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
              JavaScript
            </span>
          </div>
          <a href="https://todo-list-eight-jade-49.vercel.app/">
            <button className="h-8 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
              Live
            </button>
          </a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-center mb-8">
        <div className="w-full lg:w-1/4">
          <img
            src="public\weather.jpeg"
            width="150"
            height="150"
            alt="Weather App"
            className="mb-6 rounded"
          />
        </div>
        <div className="w-full lg:w-3/4 lg:pl-8">
          <h3 className="mb-2 text-xl font-semibold">Weather App</h3>
          <p className="mb-4 text-neutral-400">
            A weather app which tells you about the weather in different parts
            of the world as per the user input.
          </p>
          <div className="mb-4 flex flex-wrap">
            <span className="mr-2 mb-2 h-8 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
              React
            </span>
            <span className="mr-2 mb-2 h-8 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
              JavaScript
            </span>
          </div>
          <a href="https://weather-app-five-brown-31.vercel.app/">
            <button className="h-8 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
              Live
            </button>
          </a>
        </div>
      </div>

      {/* project 4    */}
      <div className="flex flex-col items-center lg:flex-row lg:justify-center mb-8">
        <div className="w-full lg:w-1/4">
          <img
            src="public\website.jpeg"
            width="150"
            height="150"
            alt="Weather App"
            className="mb-6 rounded"
          />
        </div>
        <div className="w-full lg:w-3/4 lg:pl-8">
          <h3 className="mb-2 text-xl font-semibold">Corporate Website</h3>
          <p className="mb-4 text-neutral-400">
            Website to display information about a company and their portfolio.
          </p>
          <div className="mb-4 flex flex-wrap">
            <span className="mr-2 mb-2 h-8 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
              React
            </span>
            <span className="mr-2 mb-2 h-8 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
              JavaScript
            </span>
          </div>
          <a href="https://react1-iota-lake.vercel.app/services">
            <button className="h-8 rounded bg-neutral-900 px-2 py-1 text-sm font-medium">
              Live
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
