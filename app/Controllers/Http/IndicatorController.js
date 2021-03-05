'use strict'

const Indicator = use ('App/Models/Indicator.js')

class IndicatorController {

    async adding ({request}) {
        const dataToCreate = request.only(['title', 'description', 'numbers']);

        return await Indicator.create(dataToCreate);
    }

    async list() {
        return await Indicator.all();
    }

    async show({params}) {
        return await Indicator.find(params.id);
    }

    async update({params,request}) {
        const indicator = await Indicator.find(params.id);
        const dateToUpdate = request.only(['title', 'description', 'numbers']);

        indicator.merge(dateToUpdate)

        await indicator.save()
        return indicator;
    }

    async remove({params}) {
        const indicator = await Indicator.find(params.id)

        await indicator.delete();

        return {
            message: "Indicador deletado"
        }
    }
}

module.exports = IndicatorController
