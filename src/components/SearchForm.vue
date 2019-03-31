<template>
    <div>
        <form v-on:submit="onSubmit" 
            class="form-inline">
            <div class="form-group">
                <vue-rangedate-picker 
                    i18n="EN" 
                    @selected="onDateSelected">
                </vue-rangedate-picker>
            </div>
            <div class="form-group">
                <label 
                    class="form-control-label sr-only" 
                    for="groups">groups
                </label>
                <input 
                    v-model.trim="groups" 
                    class="form-control" 
                    type="text" 
                    id="groups" 
                    placeholder="groups"
                />
            </div>
            <div class="form-group">
                <label 
                    class="form-control-label sr-only" 
                    for="hread-count">thread count
                </label>
                <input 
                    v-model.number="thread_count" 
                    class="form-control" 
                    type="number" 
                    id="thread-count" 
                    min="1" 
                    placeholder="thread count"
                />
            </div>                                                
            <div class="form-group">
                <button 
                    class="form-control btn border" 
                    onclick="this.blur();">
                    <feather-icon type="refresh-ccw"></feather-icon>
                </button>
            </div>
        </form>
        <div class="text-center">
            <div v-if="!isInputDataValid" class="alert alert-danger mb-0 mt-2">
                <b>You have entered invalid data. Please try again.</b>
            </div>
            <div v-if="isResponseEmpty" class="alert alert-primary mb-0 mt-2">
                <b>Nothing was found for data you have entered. Please try again.</b>
            </div>
        </div>
    </div>
</template>
<script>
    import Bus from '../eventBus'
    import VueRangedatePicker from 'vue-rangedate-picker'

    export default {
        name: 'search-form',
        components : {
            VueRangedatePicker
        },

        data() {
            return {
                isResponseEmpty: false,
                isInputDataValid: true,
                groups: null,
                thread_count: null,
                selectedDate: {
                    start: '',
                    end: ''
                }
            }
        },

        methods: {
            
            onDateSelected: function (daterange) {
                this.selectedDate = daterange
            },

            validateInputForm: function () {
                let errors = [];

                if (!this.selectedDate.start || !this.selectedDate.end) {
                    errors.push('Launch test date required.');
                }

                if (!this.thread_count) {
                    errors.push('Thread count required.');
                }

                if (!this.groups) {
                    errors.push('Groups required.');
                }

                if (errors.length === 0) {
                    return true;
                } else {
                    return false;
                }
            },

            onSubmit: function(e) {
                e.preventDefault();
                this.isResponseEmpty = false;

                if (!this.validateInputForm()) { 
                    Bus.$emit('barChartResultData', []);
                    this.isInputDataValid = false;
                    return
                } else {
                    this.isInputDataValid = true;
                }

                this.$axios.get(process.env.ROOT_API + process.env.BAR_CHART_API, {
                    params: {
                        startDate: this.formatter(this.selectedDate.start),
                        endDate: this.formatter(this.selectedDate.end),
                        groups: this.groups,
                        threadCount: this.thread_count
                    }
                }).then((response) => {
                    console.log(response.data);
                    Bus.$emit('barChartResultData', response.data);
                    if (response.data.length === 0) {
                        this.isResponseEmpty = true;
                    }
                }).catch(function (response) {
                    console.log(response)
                });
            },

            formatter: function(sourceDate) {
                let data = this.$moment(sourceDate, this.$moment.ISO_8601);
                return data.format('YYYY-MM-DD HH:mm:ss.SSS')
            }
        }
    }
</script>
<style>
    .calendar-head h2 {
        font-size: 1rem;
    }
    .calendar-btn-apply {
        background: #0096d9 !important
    }

    .btn:hover { 
        outline: 0 !important 
    }
</style>
