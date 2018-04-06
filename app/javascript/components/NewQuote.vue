<template>
    <div class="row">
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <label> Your Quote</label>
                <textarea class="align-content-center" rows="3" v-model="quote" @keyup.enter="createNew"></textarea>
            </div>
            <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
                <button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quote: ''
            };
        },
        methods: {
            createNew() {
                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            }
        }
    }
</script>