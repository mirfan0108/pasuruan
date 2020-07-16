import ListPenjabat from "@/app/pages/penjabat/list.penjabat.html"
import ListEvjab from "@/app/pages/evjab/list.page.html"
import FormStrukturalPage from "@/app/pages/evjab/form.structural.html"
import FormFungsionalPage from "@/app/pages/evjab/form.fungsional.html"

export default [
    {
        path: 'penjabat',
        name: 'list.penjabat',
        component: ListPenjabat
    },
    {
        path: 'evaluasi-jabatan',
        name: 'list.evjab',
        component: ListEvjab
    },
    {
        path: 'evaluasi-jabatan/input-struktural/:id',
        name: 'struktural.form.evjab',
        props: true,
        component: FormStrukturalPage
    },
    {
        path: 'evaluasi-jabatan/input-fungsional/:id',
        name: 'fungsional.form.evjab',
        props: true,
        component: FormFungsionalPage
    },
]