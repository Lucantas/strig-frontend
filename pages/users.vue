<template>  
  <div class="animated fadeIn">
    <b-row>
        <b-col sm="12">
            <b-card :header="caption">
                <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="users" :fields="fields" :current-page="currentPage" :per-page="perPage">
                <template slot="status" slot-scope="data">
                    <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
                </template>
                </b-table>
                <nav>
                <b-pagination :total-rows="getRowCount(users)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
                </nav>
            </b-card>
        </b-col>
    </b-row>
  </div>
</template>

<script>

export default {
    methods: {
        getBadge (status) {
            return status === 'Active' ? 'success'
            : status === 'Inactive' ? 'secondary'
                : status === 'Pending' ? 'warning'
                : status === 'Banned' ? 'danger' : 'primary'
        },
        getRowCount (users) {
            return users.length
        }
    },
    data() {
        return {
            users:[
                {
                    id:1,
                    name:"Admin",
                    email:"admin@email.com",
                    status:"active"
                },
                {
                    id:2,
                    name:"Lucas",
                    email:"lucas@email.com",
                    status:"active"
                },
                {
                    id:3,
                    name:"Amy",
                    email:"amy@email.com",
                    status:"active"
                }
            ],
            fields: [
                {key: 'id'},
                {key: 'name'},
                {key: 'email'},
                {key: 'status'}
            ],
            currentPage: 1,
            perPage: 5,
            totalRows: 0
        }
    },
}
</script>