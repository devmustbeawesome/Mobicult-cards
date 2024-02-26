<script>
export default {
    name: "VModal",
    props: {
        active: { type: Boolean, required: false, default: false },
        ableClose: { type: Boolean, required: false, default: true },
    },
    data() {
        return {
            internalActive: this.active,
        }
    },
    watch: {
        internalActive: function (value) {
            this.$emit('update-active', value)
        },
        active: function (value) {
            this.internalActive = value
        }
    },
    methods: {
        keyPress: function ({ key }) {
            if (this.internalActive && (key === 'Escape' || key === 'Esc'))
                this.internalActive = false
        }
    },
    onBeforeMount: function () {
        if (typeof window !== 'undefined') {
            document.addEventListener('keyup', keyPress)
        }
    },
    onBeforeUnmount: function () {
        if (typeof window !== 'undefined') {
            document.removeEventListener('keyup', keyPress)
        }
    },

}
</script>


<template>
    <div v-show="internalActive">
        <div class="modal-background" @click="internalActive = false"></div>
        <div class="modal">
            <div class="modal_header">
                <slot name="header" />
                <button v-if="ableClose" class="close-icon" @click="internalActive = false">
                    ╳
                </button>
            </div>
            <div class="modal_content">
                <slot name="content" />
            </div>
            <div class="modal_footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal-background {
    width: 100vw;
    height: 100vh;
    background-color: #0000007e;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
}

.modal {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100%;
    padding: 10px;
    border: 1px solid black;
    background-color: #ffffff;
    position: absolute;
    border-radius: 10px;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: fit-content;
    width: fit-content;
}

.modal_header {
    display: flex;
    justify-content: space-between;
    padding-right: 40px;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
}

.modal_footer {
    padding-top: 10px;
    border-top: 1px solid black;
    margin-top: 10px;
}

.close-icon {
    position: absolute;
    right: 3px;
    top: 3px;
    width: 40px;
    height: 40px;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 50%;
    background: none;
}

@media only screen and (max-width: 768px) {

    .modal {
        max-width: calc(100% - 20px);
        max-height: calc(100% - 20px);
    }

    .modal_footer {
        padding-top: 5px;
        border-top: 1px solid black;
        margin-top: 5px;
    }

    .modal_header {
        padding-right: 30px;
        padding-bottom: 5px;
        margin-bottom: 5px;
    }

    .close-icon {
        width: 30px;
        height: 30px;
    }
}
</style>