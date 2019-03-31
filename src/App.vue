<template>
    <div>
        <nav-header></nav-header>
        <div class="container-fluid">
            <div class="row">
                    <sidebar></sidebar>
                    <main 
                        role="main" 
                        class="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Dashboard</h1>
                            <search-form></search-form>
                        </div>
                        <bar-chart></bar-chart> 
                    </main>
            </div>
        </div>
    </div>
</template>

<script>

    import NavHeader from './components/NavHeader.vue'
    import Sidebar from './components/Sidebar.vue'
    import SearchForm from './components/SearchForm.vue'
    import BarChart from './components/BarChart.vue'

    export default {
        name: 'app',
        components: {
            NavHeader,
            Sidebar,
            SearchForm,
            BarChart
        },
        data () {
            return {
                selectedDate: {
                    start: '',
                    end: ''
                }
             }
        }
    }
</script>

<style>

    body {
        font-size: .875rem;
    }

    .feather {
        width: 16px;
        height: 16px;
        vertical-align: text-bottom;
    }

    /*
    * Sidebar
    */
    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 100; /* Behind the navbar */
        padding: 48px 0 0; /* Height of navbar */
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
    }

    .sidebar-sticky {
        position: relative;
        top: 0;
        height: calc(100vh - 48px);
        padding-top: .5rem;
        overflow-x: hidden;
        overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    }

    @supports ((position: -webkit-sticky) or (position: sticky)) {
    .sidebar-sticky {
        position: -webkit-sticky;
        position: sticky;
    }
    }

    .sidebar .nav-link {
        font-weight: 500;
        color: #333;
    }

    .sidebar .nav-link .feather {
        margin-right: 4px;
        color: #999;
    }

    .sidebar .nav-link.active {
        color: #007bff;
    }

    .sidebar .nav-link:hover .feather,
    .sidebar .nav-link.active .feather {
        color: inherit;
    }

    .sidebar-heading {
        font-size: .75rem;
        text-transform: uppercase;
    }

    /*
    * Content
    */
    [role="main"] {
        padding-top: 48px; /* Space for fixed navbar */
    }

    /*
    * Navbar
    */
    .navbar-brand {
        padding-top: .75rem;
        padding-bottom: .75rem;
        font-size: 1rem;
        background-color: rgba(0, 0, 0, .25);
        box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
    }

    .navbar .form-control {
        padding: .75rem 1rem;
        border-width: 0;
        border-radius: 0;
    }

    .form-control-dark {
        color: #fff;
        background-color: rgba(255, 255, 255, .1);
        border-color: rgba(255, 255, 255, .1);
    }

    .form-control-dark:focus {
        border-color: transparent;
        box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
    }

    .input-date {
        border: 1px solid #ced4da;
        color: #75757d;
        border-radius: 0.25rem;
        height: calc(2.25rem + 2px);
        width: 240px !important;
        padding: .375rem .75rem !important;
        font-size: 1rem !important;
    }
    
    
</style>