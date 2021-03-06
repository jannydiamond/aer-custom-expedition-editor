import React from 'react'

import DATA from 'aer-data'
import * as aerTypes from 'aer-types'

import * as types from 'types'

import Accordion from 'components/organisms/Accordion'
import FormGroupSelect from 'components/molecules/FormGroupSelect'
import FormGroupInputText from 'components/molecules/FormGroupInputText'

type Props = {
  config: types.BattleRewardConfig
  updateDraftRewardConfig: (config: types.BattleRewardConfig) => void
}

const Mages = ({ config, updateDraftRewardConfig }: Props) => {
  const dataMages: aerTypes.Mage[] = Object.values(
    DATA.normalizedData.ENG.mages
  )

  const mageOptions = dataMages.map((mage: aerTypes.Mage) => {
    return {
      value: mage.id,
      label: mage.name,
    }
  })

  const handleMageChange = (selectOptions: types.SelectOptions) => {
    const selectedMageIds: string[] = selectOptions
      ? selectOptions.map((option: types.SelectOption) => option.value)
      : []

    updateDraftRewardConfig({
      ...config,
      ...Object.assign({
        mage: {
          ...config.mage,
          ids: [...selectedMageIds],
        },
      }),
    })
  }

  const handleMageRandomAmountChange = (event: React.ChangeEvent) => {
    updateDraftRewardConfig({
      ...config,
      ...Object.assign({
        mage: {
          ...config.mage,
          randomAmount: parseInt((event.target as HTMLInputElement).value),
        },
      }),
    })
  }

  return (
    <Accordion id="mages" title="Mages" open>
      <FormGroupSelect
        options={mageOptions}
        id="selectMages"
        label="Select Mages"
        onChange={handleMageChange}
        isMulti
      />
      <h3>Random Mages</h3>
      <p>Enter the amount of random mages.</p>
      <FormGroupInputText
        id="randomMagesAmount"
        label="Amount of random mages"
        onChange={handleMageRandomAmountChange}
        defaultValue={0}
      />
    </Accordion>
  )
}

export default React.memo(Mages)
