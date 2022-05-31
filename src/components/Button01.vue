<template>
    <button :style="{width: this.size}">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "Button01",
    props: {
        text: {
            type: String,
            required: false
        },
        taille: {
            type: String,
            default: "100"
        }
    },
    computed: {
        capital() {
            return this.text.toUpperCase()
        },

        size() {
            return this.taille + "%"
        }
    }
}
</script>

<style scoped>
    button {
        font-size: 1em;
        padding: 10px 25px;
        font-weight: 500;
        background: transparent;
        outline: none !important;
        cursor: pointer;
        transition: all 200ms ease;
        position: relative;
        display: block;
        border: 2px solid var(--white);
        border-radius: 10px;
        color: var(--white);
        margin: auto;
        text-transform: uppercase;
    }

    button:hover {
        background-color: var(--white);
        color: var(--black)
    }
</style>