export default {
    data() {
      return {
        newTask: '', // Initialize newTask to an empty string
        tasks: []    // Initialize tasks as an empty array
      };
    },
    methods: {
      addTask() {
        if (this.newTask.trim() !== '') {
          // Check if newTask is not empty
          this.tasks.push({
            text: this.newTask,  // Add newTask to the tasks array
            completed: false     // Initialize completed as false
          });
          this.newTask = '';  // Clear the newTask input
        }
      },
      removeTask(index) {
        this.tasks.splice(index, 1); // Remove the task at the specified index
      }
    }
  };
  