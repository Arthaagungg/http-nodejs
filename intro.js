const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    id: "intro",
    run: async (client, interaction, config, db) => {

            const modal = new ModalBuilder()
                .setCustomId("intro-modals")
                .setTitle(`FORM INTRODUCTION`);

const ModalNama = new TextInputBuilder()
.setCustomId("inputNama")
.setLabel(`Input Nama :`)
.setPlaceholder("Masukan Nama Anda.")
.setMaxLength(22)
.setRequired(true)
.setStyle(TextInputStyle.Short);

const ModalUmur = new TextInputBuilder()
.setCustomId("inputUmur")
.setLabel(`Input Umur :`)
.setPlaceholder("Masukan Umur Anda.")
.setMaxLength(15)
 .setRequired(true)
.setStyle(TextInputStyle.Short);

const ModalGender = new TextInputBuilder()
.setCustomId("inputGender")
.setLabel(`Input Gender :`)
.setPlaceholder("Masukan Gender Anda.")
.setMaxLength(15)
 .setRequired(true)
.setStyle(TextInputStyle.Short);

const ModalKota = new TextInputBuilder()
.setCustomId("inputKota")
.setLabel(`Input Kota :`)
.setPlaceholder("Masukan Kota/Asal Anda.")
.setMaxLength(22)
 .setRequired(true)
.setStyle(TextInputStyle.Short);

const ModalHobi = new TextInputBuilder()
.setCustomId("inputHobi")
.setLabel(`Input Hobi :`)
.setPlaceholder("Masukan Hobi Anda.")
.setMaxLength(22)
 .setRequired(true)
.setStyle(TextInputStyle.Short);



const nama = new ActionRowBuilder().addComponents(ModalNama);
const umur = new ActionRowBuilder().addComponents(ModalUmur);
const gender = new ActionRowBuilder().addComponents(ModalGender);
const kota = new ActionRowBuilder().addComponents(ModalKota);
const hobi = new ActionRowBuilder().addComponents(ModalHobi);
           modal.addComponents(nama, umur, gender, kota, hobi);

            await interaction.showModal(modal);
      
    },
};
