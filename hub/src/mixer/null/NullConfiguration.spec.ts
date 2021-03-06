import NullConfiguration from './NullConfiguration'

function createDefaultNullConfiguration(): NullConfiguration {
    return new NullConfiguration()
}

describe('fromJson/toJson', () => {
    it("does work", () => {
        const conf = createDefaultNullConfiguration()
        const loadedConf = createDefaultNullConfiguration()
        loadedConf.fromJson(conf.toJson())

        // it does not throw an error. Apart from that it does not have any settings to check
    })
})

describe('clone', () => {
    it("does work", () => {
        const conf = createDefaultNullConfiguration()
        conf.clone()

        // it does not throw an error. Apart from that it does not have any settings to check
    })
})
