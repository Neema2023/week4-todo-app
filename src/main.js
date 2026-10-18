
import './style.css'

// Create the fixed app layout. User task text is added safely with textContent.
const app = document.querySelector('#app')

app.innerHTML = `
<div class="min-h-screen bg-stone-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
  <header class="border-b border-stone-200 bg-white dark:border-slate-800 dark:bg-slate-900">
    <div class="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-5">
      <div class="flex items-center gap-3">
        <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-800 text-xl font-bold text-white">R</div>
        <div>
          <p class="text-xl font-extrabold tracking-tight">RestoFlow</p>
          <p class="text-sm text-slate-500 dark:text-slate-400">Restaurant task manager</p>
        </div>
      </div>
      <button id="theme-toggle" type="button" class="rounded-xl border border-stone-200 px-3 py-2 text-sm font-semibold hover:bg-stone-100 focus:outline-2 focus:outline-emerald-700 dark:border-slate-700 dark:hover:bg-slate-800" aria-label="Switch to dark mode">Dark mode</button>
    </div>
  </header>

  <main class="mx-auto max-w-5xl px-4 py-8 sm:py-12">
    <section class="mb-8">
      <p class="mb-3 text-sm font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-400">Restaurant operations</p>
      <h1 class="max-w-2xl text-3xl font-extrabold tracking-tight sm:text-5xl">Keep your restaurant running smoothly.</h1>
      <p class="mt-4 max-w-2xl leading-7 text-slate-600 dark:text-slate-400">Organize kitchen preparation, customer service and daily restaurant tasks in one place.</p>
    </section>

    <section class="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
      <div class="rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <p class="text-sm text-slate-500 dark:text-slate-400">Total tasks</p>
        <p id="total-count" class="mt-2 text-3xl font-extrabold">0</p>
      </div>
      <div class="rounded-2xl border border-stone-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
        <p class="text-sm text-slate-500 dark:text-slate-400">Tasks remaining</p>
        <p id="remaining-count" class="mt-2 text-3xl font-extrabold">0 tasks left</p>
      </div>
    </section>

    <section class="mb-6 rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
      <h2 class="mb-4 text-lg font-bold">Add a restaurant task</h2>
      <form id="task-form" class="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div class="min-w-0 flex-1">
          <label for="task-input" class="mb-2 block text-sm font-semibold">Task description</label>
          <input id="task-input" type="text" placeholder="e.g. Prepare dining tables" autocomplete="off" aria-describedby="form-error" class="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 dark:border-slate-700 dark:bg-slate-950" />
        </div>
        <div class="sm:w-36">
          <label for="task-priority" class="mb-2 block text-sm font-semibold">Priority</label>
          <select id="task-priority" class="w-full rounded-xl border border-stone-300 bg-white px-3 py-3 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 dark:border-slate-700 dark:bg-slate-950">
            <option value="medium" selected>Medium</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
        </div>
        <button type="submit" class="rounded-xl bg-emerald-800 px-5 py-3 font-bold text-white hover:bg-emerald-900 focus:outline-2 focus:outline-offset-2 focus:outline-emerald-700">+ Add task</button>
      </form>
      <p id="form-error" class="mt-3 hidden text-sm font-medium text-red-600 dark:text-red-400" role="alert"></p>
    </section>

    <section class="rounded-2xl border border-stone-200 bg-white p-5 sm:p-6 dark:border-slate-800 dark:bg-slate-900">
      <div class="mb-5 flex flex-col gap-4">
        <div>
          <h2 class="text-xl font-bold">Your task list</h2>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">Double-click a task description or choose Edit to change it.</p>
        </div>
        <div class="flex flex-wrap items-center gap-2" id="filter-buttons" role="group" aria-label="Filter tasks">
          <button type="button" data-filter="all" aria-pressed="true" class="rounded-full px-4 py-2 text-sm font-semibold">All</button>
          <button type="button" data-filter="active" aria-pressed="false" class="rounded-full px-4 py-2 text-sm font-semibold">Active</button>
          <button type="button" data-filter="completed" aria-pressed="false" class="rounded-full px-4 py-2 text-sm font-semibold">Completed</button>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div class="sm:w-52">
            <label for="sort-select" class="mb-2 block text-sm font-semibold">Sort tasks</label>
            <select id="sort-select" class="w-full rounded-xl border border-stone-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-700/20 dark:border-slate-700 dark:bg-slate-950">
              <option value="recent">Newest first</option>
              <option value="priority">High priority first</option>
            </select>
          </div>
          <button id="clear-completed" type="button" class="rounded-xl border border-stone-300 px-4 py-2 text-sm font-semibold hover:bg-stone-100 focus:outline-2 focus:outline-emerald-700 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:hover:bg-slate-800">Clear completed</button>
        </div>
      </div>

      <ul id="task-list" class="space-y-3" aria-label="Restaurant tasks"></ul>
      <div id="empty-state" class="rounded-2xl border border-dashed border-stone-300 px-5 py-12 text-center dark:border-slate-700">
        <p class="text-lg font-bold">Your task list is clear!</p>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Add your first restaurant task above to get started.</p>
      </div>
    </section>

    <footer class="py-8 text-center text-sm text-slate-500 dark:text-slate-400">
      RestoFlow · Make every shift run smoothly.
    </footer>
  </main>
</div>
`

// Select the interface elements used by the application.
const taskForm = document.querySelector('#task-form')
const taskInput = document.querySelector('#task-input')
const priorityInput = document.querySelector('#task-priority')
const taskList = document.querySelector('#task-list')
const formError = document.querySelector('#form-error')
const emptyState = document.querySelector('#empty-state')
const totalCount = document.querySelector('#total-count')
const remainingCount = document.querySelector('#remaining-count')
const filterButtons = document.querySelector('#filter-buttons')
const sortSelect = document.querySelector('#sort-select')
const clearCompletedButton = document.querySelector('#clear-completed')
const themeToggle = document.querySelector('#theme-toggle')

// Load saved tasks from localStorage and reject invalid saved data.
function loadTasks() {
  try {
    const savedTasks = JSON.parse(readStorage('restoflow-tasks', '[]'))
    if (!Array.isArray(savedTasks)) return []

    const validTasks = []
    for (const task of savedTasks) {
      if (!task || typeof task.id !== 'string' || typeof task.text !== 'string' || typeof task.done !== 'boolean') continue
      const priority = ['high', 'medium', 'low'].includes(task.priority) ? task.priority : 'medium'
      validTasks.push({ id: task.id, text: task.text, done: task.done, priority, createdAt: Number(task.createdAt) || Date.now() })
    }
    return validTasks
  } catch {
    return []
  }
}

// Read a stored value safely and return a fallback when it is unavailable.
function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value === null ? fallback : value
  } catch {
    return fallback
  }
}

// Save a value in localStorage and report storage errors in the interface.
function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    showError('Your browser could not save the changes. Check your browser storage settings.')
  }
}

// Load the selected filter and use All when the saved value is invalid.
function loadFilter() {
  const filter = readStorage('restoflow-filter', 'all')
  return ['all', 'active', 'completed'].includes(filter) ? filter : 'all'
}

// Load the saved dark mode preference.
function loadTheme() {
  return readStorage('restoflow-theme', 'light') === 'dark'
}

// Save the current tasks array.
function saveTasks() {
  writeStorage('restoflow-tasks', JSON.stringify(tasks))
}

// Save the selected filter.
function saveFilter() {
  writeStorage('restoflow-filter', currentFilter)
}

// Save the selected theme.
function saveTheme() {
  writeStorage('restoflow-theme', isDarkMode ? 'dark' : 'light')
}

// Keep the tasks, filter, editing mode and theme as application state.
const tasks = loadTasks()
let currentFilter = loadFilter()
let currentSort = 'recent'
let editingTaskId = null
let isDarkMode = loadTheme()

// Display a validation or storage error accessibly on the page.
function showError(message) {
  formError.textContent = message
  formError.classList.remove('hidden')
}

// Remove the current error message.
function clearError() {
  formError.textContent = ''
  formError.classList.add('hidden')
}

// Return tasks matching the selected filter and sort order.
function getVisibleTasks() {
  let visibleTasks = tasks.filter((task) => {
    if (currentFilter === 'active') return !task.done
    if (currentFilter === 'completed') return task.done
    return true
  })

  if (currentSort === 'priority') {
    const priorityOrder = { high: 0, medium: 1, low: 2 }
    visibleTasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority] || b.createdAt - a.createdAt)
  } else {
    visibleTasks.sort((a, b) => b.createdAt - a.createdAt)
  }

  return visibleTasks
}

// Return Tailwind classes for the three priority badges.
function getPriorityClasses(priority) {
  if (priority === 'high') return 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300'
  if (priority === 'low') return 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
  return 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
}

// Create an accessible task action button without inline event handlers.
function createActionButton(action, label, taskText) {
  const button = document.createElement('button')
  button.type = 'button'
  button.dataset.action = action
  button.textContent = label
  button.setAttribute('aria-label', `${label} task: ${taskText}`)
  button.className = 'rounded-lg border border-stone-200 px-3 py-2 text-sm font-semibold hover:bg-stone-100 focus:outline-2 focus:outline-emerald-700 dark:border-slate-700 dark:hover:bg-slate-800'
  return button
}

// Build one task row using DOM elements and textContent for user text.
function createTaskElement(task) {
  const item = document.createElement('li')
  item.dataset.id = task.id
  item.className = 'flex flex-col gap-4 rounded-2xl border border-stone-200 p-4 sm:flex-row sm:items-center sm:justify-between dark:border-slate-800'

  const content = document.createElement('div')
  content.className = 'flex min-w-0 flex-1 items-start gap-3'

  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.checked = task.done
  checkbox.dataset.role = 'complete'
  checkbox.setAttribute('aria-label', task.done ? `Mark ${task.text} active` : `Mark ${task.text} complete`)
  checkbox.className = 'mt-1 h-4 w-4 accent-emerald-700 focus:outline-2 focus:outline-emerald-700'

  const details = document.createElement('div')
  details.className = 'min-w-0 flex-1'

  if (editingTaskId === task.id) {
    const editInput = document.createElement('input')
    editInput.type = 'text'
    editInput.value = task.text
    editInput.dataset.role = 'edit-input'
    editInput.setAttribute('aria-label', 'Edit task description')
    editInput.className = 'w-full rounded-lg border border-emerald-700 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-700/20 dark:bg-slate-950'
    details.append(editInput)
  } else {
    const text = document.createElement('span')
    text.textContent = task.text
    text.dataset.role = 'task-text'
    text.title = 'Double-click to edit'
    text.className = task.done
      ? 'cursor-text break-words text-slate-400 line-through dark:text-slate-500'
      : 'cursor-text break-words font-semibold text-slate-800 dark:text-slate-100'
    details.append(text)
  }

  const badge = document.createElement('span')
  badge.textContent = `${task.priority.charAt(0).toUpperCase()}${task.priority.slice(1)} priority`
  badge.className = `mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${getPriorityClasses(task.priority)}`
  details.append(badge)

  content.append(checkbox, details)

  const actions = document.createElement('div')
  actions.className = 'flex shrink-0 gap-2 pl-7 sm:pl-0'
  actions.append(
    createActionButton('edit', 'Edit', task.text),
    createActionButton('delete', 'Delete', task.text)
  )

  item.append(content, actions)
  return item
}

// Draw the task list, counts, filter buttons and empty-state message from state.
function render() {
  const visibleTasks = getVisibleTasks()
  taskList.replaceChildren()

  for (const task of visibleTasks) {
    taskList.append(createTaskElement(task))
  }

  totalCount.textContent = String(tasks.length)
  const remaining = tasks.filter((task) => !task.done).length
  remainingCount.textContent = `${remaining} ${remaining === 1 ? 'task' : 'tasks'} left`

  const emptyMessages = {
    all: 'No tasks yet. Add your first restaurant task above.',
    active: 'All caught up! There are no active tasks.',
    completed: 'No completed tasks to show yet.'
  }
  emptyState.querySelector('p:last-child').textContent = emptyMessages[currentFilter]
  emptyState.classList.toggle('hidden', visibleTasks.length > 0)

  for (const button of filterButtons.querySelectorAll('[data-filter]')) {
    const selected = button.dataset.filter === currentFilter
    button.setAttribute('aria-pressed', String(selected))
    button.className = selected
      ? 'rounded-full bg-emerald-800 px-4 py-2 text-sm font-semibold text-white'
      : 'rounded-full bg-stone-100 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-stone-200 focus:outline-2 focus:outline-emerald-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700'
  }

  clearCompletedButton.disabled = !tasks.some((task) => task.done)

  if (editingTaskId !== null) {
    const input = taskList.querySelector('[data-role="edit-input"]')
    if (input) {
      input.focus()
      input.select()
    }
  }
}

// Validate and add a task to the state array.
function addTask() {
  const text = taskInput.value.trim()

  if (!text) {
    showError('Please enter a task before adding it.')
    taskInput.focus()
    return
  }

  if (text.length > 100) {
    showError('Task descriptions must be 100 characters or fewer.')
    taskInput.focus()
    return
  }

  tasks.push({
    id: crypto.randomUUID(),
    text,
    done: false,
    priority: priorityInput.value,
    createdAt: Date.now()
  })

  taskInput.value = ''
  priorityInput.value = 'medium'
  clearError()
  saveTasks()
  render()
  taskInput.focus()
}

// Update the completion status of a task.
function toggleTask(id, isDone) {
  const task = tasks.find((item) => item.id === id)
  if (!task) return

  task.done = isDone
  saveTasks()
  render()
}

// Delete a task only after the user confirms the action.
function deleteTask(id) {
  const taskIndex = tasks.findIndex((task) => task.id === id)
  if (taskIndex === -1) return

  const task = tasks[taskIndex]
  if (!window.confirm(`Are you sure you want to delete "${task.text}"?`)) return

  tasks.splice(taskIndex, 1)
  if (editingTaskId === id) editingTaskId = null
  clearError()
  saveTasks()
  render()
}

// Switch one task into in-place editing mode.
function startEditing(id) {
  if (!tasks.some((task) => task.id === id)) return
  editingTaskId = id
  clearError()
  render()
}

// Validate and save the edited task description.
function saveEdit(id, value) {
  const text = value.trim()

  if (!text) {
    showError('A task cannot be empty. Enter some text or press Escape to cancel.')
    render()
    return
  }

  if (text.length > 100) {
    showError('Task descriptions must be 100 characters or fewer.')
    render()
    return
  }

  const task = tasks.find((item) => item.id === id)
  if (!task) return

  task.text = text
  editingTaskId = null
  clearError()
  saveTasks()
  render()
}

// Remove all completed tasks from the state array.
function clearCompletedTasks() {
  const remainingTasks = tasks.filter((task) => !task.done)
  if (remainingTasks.length === tasks.length) return

  tasks.splice(0, tasks.length, ...remainingTasks)
  editingTaskId = null
  clearError()
  saveTasks()
  render()
}

// Handle the task form submission, including submission with Enter.
function handleFormSubmit(event) {
  event.preventDefault()
  addTask()
}

// Handle Edit and Delete clicks through event delegation on the task list.
function handleListClick(event) {
  const button = event.target.closest('[data-action]')
  if (!button) return

  const item = button.closest('li[data-id]')
  if (!item) return

  if (button.dataset.action === 'edit') startEditing(item.dataset.id)
  if (button.dataset.action === 'delete') deleteTask(item.dataset.id)
}

// Handle checkbox changes through event delegation on the task list.
function handleListChange(event) {
  if (!event.target.matches('[data-role="complete"]')) return

  const item = event.target.closest('li[data-id]')
  if (item) toggleTask(item.dataset.id, event.target.checked)
}

// Allow users to start editing by double-clicking the task description.
function handleListDoubleClick(event) {
  const text = event.target.closest('[data-role="task-text"]')
  if (!text) return

  const item = text.closest('li[data-id]')
  if (item) startEditing(item.dataset.id)
}

// Save edits with Enter or cancel them with Escape.
function handleListKeydown(event) {
  if (!event.target.matches('[data-role="edit-input"]')) return

  const item = event.target.closest('li[data-id]')
  if (!item) return

  if (event.key === 'Enter') {
    event.preventDefault()
    saveEdit(item.dataset.id, event.target.value)
  }

  if (event.key === 'Escape') {
    editingTaskId = null
    clearError()
    render()
  }
}

// Clear an old error when the user starts correcting a value.
function handleListInput(event) {
  if (event.target.matches('[data-role="edit-input"]')) clearError()
}

// Change the active filter and save it so it survives a page refresh.
function applyFilter(filter) {
  if (!['all', 'active', 'completed'].includes(filter)) return

  currentFilter = filter
  editingTaskId = null
  clearError()
  saveFilter()
  render()
}

// Handle clicks on All, Active and Completed.
function handleFilterClick(event) {
  const button = event.target.closest('[data-filter]')
  if (button) applyFilter(button.dataset.filter)
}

// Change the order used to display tasks.
function handleSortChange() {
  currentSort = sortSelect.value
  render()
}

// Toggle dark mode and remember the choice.
function toggleTheme() {
  isDarkMode = !isDarkMode
  applyTheme()
  saveTheme()
}

// Apply the saved theme and update the accessible theme button label.
function applyTheme() {
  document.documentElement.classList.toggle('dark', isDarkMode)
  themeToggle.textContent = isDarkMode ? '☀ Light mode' : '☾ Dark mode'
  themeToggle.setAttribute('aria-label', isDarkMode ? 'Switch to light mode' : 'Switch to dark mode')
}

// Register event listeners without inline onclick attributes.
taskForm.addEventListener('submit', handleFormSubmit)
taskInput.addEventListener('input', clearError)
taskList.addEventListener('click', handleListClick)
taskList.addEventListener('change', handleListChange)
taskList.addEventListener('dblclick', handleListDoubleClick)
taskList.addEventListener('keydown', handleListKeydown)
taskList.addEventListener('input', handleListInput)
filterButtons.addEventListener('click', handleFilterClick)
sortSelect.addEventListener('change', handleSortChange)
clearCompletedButton.addEventListener('click', clearCompletedTasks)
themeToggle.addEventListener('click', toggleTheme)

// Apply the saved theme and draw the initial interface.
applyTheme()
render()
