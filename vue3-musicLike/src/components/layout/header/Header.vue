<template>
  <div class="max-w-md mx-auto mt-8">
    <h1 class="text-2xl font-bold mb-4">Todo List</h1>
    <form class="flex mb-4">
      <input
        type="text"
        class="w-full rounded-l py-2 px-4 focus:outline-none"
        placeholder="Add a task"
      />
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded-r">
        Add
      </button>
    </form>
    <ul class="bg-white shadow-lg rounded-lg divide-y divide-gray-200">
      <li class="p-4">
        <input type="checkbox" class="mr-2" />
        <span class="line-through">Completed Task</span>
      </li>
      <li class="p-4">
        <input type="checkbox" class="mr-2" />
        <span>Pending Task</span>
      </li>
    </ul>
  </div>
</template>
