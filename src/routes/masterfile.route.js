import EquipmentsPage   from "@/app/pages/masterfiles/info.equipment.page.html"
import MaterialsPage   from "@/app/pages/masterfiles/info.material.page.html"
import TalentsPage   from "@/app/pages/masterfiles/info.talent.page.html"
import PowersPage   from "@/app/pages/masterfiles/info.power.page.html"
import EffortsPage from "@/app/pages/masterfiles/info.effort.page.html"
import InterestsPage from "@/app/pages/masterfiles/info.interest.page.html"
import ResponsiblePage from "@/app/pages/masterfiles/info.responsible.page.html"
import TemperamentPage from "@/app/pages/masterfiles/info.temperament.page.html"
import AuthorityPage from "@/app/pages/masterfiles/info.authority.page.html"
import OpdPage from "@/app/pages/management/opd.page.html"
import OrganzationPage from "@/app/pages/management/organization.page.html"
import UnitsPage from "@/app/pages/management/unit.page.html"
import PositionPage from "@/app/pages/management/position.page.html"
import CreatePositionPage from "@/app/pages/management/form.position.page.html"

const routes = {
    equipment: {
        path: 'equipments',
        name: 'masterfile.equipments.page',
        component: EquipmentsPage
    },
    material: {
        path: 'material',
        name: 'masterfile.materials.page',
        component: MaterialsPage
    },
    talent: {
        path: 'talent',
        name: 'masterfile.talents.page',
        component: TalentsPage
    },
    power: {
        path: 'power-types',
        name: 'masterfile.powers.page',
        component: PowersPage
    },
    effort: {
        path: 'efforts',
        name: 'masterfile.efforts.page',
        component: EffortsPage
    },
    interest: {
        path: 'interests',
        name: 'masterfile.interest.page',
        component: InterestsPage
    },
    responsible: {
        path: 'responsible',
        name: 'masterfile.responsible.page',
        component: ResponsiblePage
    },
    temperament: {
        path: 'temperament',
        name: 'masterfile.temperament.page',
        component: TemperamentPage
    },
    authority: {
        path: 'authority',
        name: 'masterfile.authority.page',
        component: AuthorityPage
    },
    opd: {
        path: 'opd',
        name: 'masterfile.opd.page',
        component: OpdPage
    },
    organization: {
        path: 'organization',
        name: 'masterfile.organization.page',
        component: OrganzationPage
    },
    unit: {
        path: 'unit',
        name: 'masterfile.unit.page',
        component: UnitsPage
    },
    position: {
        path: 'position',
        name: 'masterfile.position.page',
        component: PositionPage
    },
    createPosition: {
        path: 'create-position',
        name: 'masterfile.create.position.page',
        component: CreatePositionPage
    }
}

export default routes