// JS Module that exports things to the outside world.
// In this case, we are exporting an object.

export default {
    template: `
            <button 
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed':true,
                'bg-blue-200 hover:bg-blue-400': type === 'primary',
                'bg-purple-200 hover:bg-purple-400': type === 'secondary',
                'bg-gray-200 hover:bg-gray-400': type === 'muted'
            }"

            :disabled="processing"
        
            >
                <slot />
            </button>
        `,

    props: {
        // Name of the prop
        type: {
            // Type of the prop
            type: String,
            default: 'primary'
        }
    },

    data() {
        return {
            processing: true
        };
    }
};