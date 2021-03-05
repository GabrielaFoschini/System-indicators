'use strict'

const IndicatorMember = use ('App/Models/IndicatorMember.js')

class IndicatorMemberController {
    async adding ({request}) {
        const dataToCreate = request.only(['indicators_id', 'user_id']);

        return await IndicatorMember.create(dataToCreate);
    }

    async list() {
        return await IndicatorMember.all();
    }

    async show({params}) {
        return await IndicatorMember.find(params.id);
    }

    async update({params,request}) {
        const indicatorMember = await IndicatorMember.find(params.id);
        const dateToUpdate = request.only(['indicators_id', 'user_id']);

        indicatorMember.merge(dateToUpdate)

        await indicatorMember.save()
        return indicatorMember;
    }

    async remove({params}) {
        const indicatorMember = await indicatorMember.find(params.id)

        await indicatorMember.delete();

        return {
            message: "Relação deletado"
        }
    }
}

module.exports = IndicatorMemberController
