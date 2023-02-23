export default {
    template: `
    <section v-show="inProgressAssignments.length">
    <h2 class="font-bold mb-2">In Progress</h2>
    <ul>
        <!-- Always add a :key to any element that has a "for" to prevent wonky results -->
        <!-- EX: Without :key, when checked, the property would still appear in the In Progress section when it's completed. -->
        <li
            v-for="assignment in inProgressAssignments"
            :key="assignment.id"
        >
        <label>
        {{ assignment.name }}
        <!-- When working with foreign inputs, always bind them with the v-model -->
        <input type="checkbox" v-model="assignment.complete">
        </label>
        </li>
        </ul>
        </section>
        
        <!-- Only show this section if we have assignments that have been completed, and the resulting array is more than 0. -->
        <!-- Difference between v-show and v-if. v-show = toggles. v-if = one time thing. -->
        <section v-show="completedAssignments.length" class="mt-8">
        <h2 class="font-bold mb-2">Completed</h2>
        <ul>
        <!-- Only filter down when the properties (assignments) are set to true. -->
        <li
        v-for="assignment in completedAssignments" :key="assignment.id"
        >
        <label>
        {{ assignment.name }}
        <!-- When working with foreign inputs, always bind them with the v-model -->
        <input type="checkbox" v-model="assignment.complete">
        </label>
        </li>
        </ul>
        </section>    
    `,
    data() {
        return {
            // Assignments may be stored in the DB. So add unique IDs to store each one.
            assignments: [
                { name: "Finish Project", complete: false, id: 1 },
                { name: "Read Chapter 4", complete: false, id: 2 },
                { name: "Turn in Homework", complete: false, id: 3 }
            ]
        }
    },
    
    // Computed Properties
    computed: {
        inProgressAssignments() {
            return this.assignments.filter(assignment => !assignment.complete);
        },
        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete);
        }
    }
}