import {database} from './database';

export type Weight = {
  createdAt?: Date;
  weight: string | number;
  note: string | undefined;
};

const weights = database.collections.get('weights');
export const LastWeights = database.get('weights').query().fetch();

export const observeWeights = () => weights.query().observe();


export const saveWeight = async ({weight, note}: Weight) => {
  await database.write(async () => {
    await weights.create((entry) => {
      entry.weight = Number(weight);
      entry.note = note;
    });
  });
};