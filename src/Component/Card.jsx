import React from 'react'
import Button from './Button';

function Card() {
  return (
    <div className='mx-[200px] flex flex-col gap-4'>
      <a
        href="#"
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div class="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
              Building a SaaS product as a software developer
            </h3>

            <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
          </div>

          <div class="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div class="mt-4">
          <p class="max-w-[40ch] text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
            provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <dl class="mt-6 flex gap-4 sm:gap-6">
          <div class="flex flex-col-reverse">
            <Button content={"subscribe"} />

          </div>

          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">Reading time</dt>
            <dd class="text-xs text-gray-500">3 minute</dd>
          </div>
        </dl>
      </a>
      <a
        href="#"
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div class="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
              Building a SaaS product as a software developer
            </h3>

            <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
          </div>

          <div class="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div class="mt-4">
          <p class="max-w-[40ch] text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
            provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <dl class="mt-6 flex gap-4 sm:gap-6">
          <div class="flex flex-col-reverse">
            <Button content={"click"} />
          </div>

          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">Reading time</dt>
            <dd class="text-xs text-gray-500">3 minute</dd>
          </div>
        </dl>
      </a>
      <a
        href="#"
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div class="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
              Building a SaaS product as a software developer
            </h3>

            <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
          </div>

          <div class="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div class="mt-4">
          <p class="max-w-[40ch] text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
            provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <dl class="mt-6 flex gap-4 sm:gap-6">
          <div class="flex flex-col-reverse">
            <Button content={"touch"} />
          </div>

          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">Reading time</dt>
            <dd class="text-xs text-gray-500">3 minute</dd>
          </div>
        </dl>
      </a>
      <a
        href="#"
        class="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>

        <div class="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
              Building a SaaS product as a software developer
            </h3>

            <p class="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
          </div>

          <div class="hidden sm:block sm:shrink-0">
            <img
              alt="Paul Clapton"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
              class="h-16 w-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div class="mt-4">
          <p class="max-w-[40ch] text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum
            provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <dl class="mt-6 flex gap-4 sm:gap-6">
          <div class="flex flex-col-reverse">
            <Button content={"press"} />
          </div>

          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">Reading time</dt>
            <dd class="text-xs text-gray-500">3 minute</dd>
          </div>
        </dl>
      </a>
    </div>
  )
}

export default Card;