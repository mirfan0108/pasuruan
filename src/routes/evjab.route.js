import ListPenjabat from "@/app/pages/penjabat/list.penjabat.html"
import ListEvjab from "@/app/pages/evjab/list.page.html"
import FormStrukturalPage from "@/app/pages/evjab/form.structural.html"
import FormFungsionalPage from "@/app/pages/evjab/form.fungsional.html"
import FormInfofakStruktural from "@/app/pages/evjab/infofak.structural.html"
import FormInfofakFungsional from "@/app/pages/evjab/infofak.fungsional.html"
import ListPermenDua from "@/app/pages/evjab/list.permen.dua.html"
import InfoFaktorPage from "@/app/pages/evjab/infofak.html"

import LampiranPage from "@/app/pages/evjab/lampiran.html"

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
    {
        path: 'evaluasi-jabatan/info-faktur',
        name: 'list.infofak',
        component: InfoFaktorPage
    },
    {
        path: 'evaluasi-jabatan/info-faktur/input-struktural/:id',
        name: 'input.infofak.struktur',
        props: true,
        component: FormInfofakStruktural
    },

    {
        path: 'evaluasi-jabatan/info-faktur/input-fungsional/:id',
        name: 'input.infofak.fungsional',
        props: true,
        component: FormInfofakFungsional
    },

    {
        path: 'evaluasi-jabatan/lampiran-permen-dua',
        name: 'list.permen.dua',
        component: ListPermenDua
    },
    {
        path: 'evaluasi-jabatan/lampiran',
        name: 'lampiran.page',
        component: LampiranPage
    }

]