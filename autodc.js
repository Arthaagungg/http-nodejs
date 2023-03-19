const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    id: "autoDc",
    run: async (client, interaction, config, db) => {

            const modal = new ModalBuilder()
                .setCustomId("autodc-modals")
                .setTitle(`Setting Waktu Auto Disconnect !`);

            const getTime = new TextInputBuilder()
                .setCustomId("inputTime")
                .setLabel(`Isi Dengan Waktu:`)
                .setPlaceholder("Contoh : 24")
                .setRequired(true)
                .setMaxLength(4)
                .setStyle(TextInputStyle.Short);
            const getSatuanTime = new TextInputBuilder()
                .setCustomId("inputSatuan")
                .setLabel(`Isi Dengan Satuan Waktu:`)
                      .setPlaceholder("Contoh : jam/h/hour - menit/min/minute/ !")
                .setMaxLength(5)
                .setRequired(true)
                .setStyle(TextInputStyle.Short);
            const Satuan = new ActionRowBuilder().addComponents(getSatuanTime);
            const Time = new ActionRowBuilder().addComponents(getTime);
            modal.addComponents(Time, Satuan);

            await interaction.showModal(modal);
      
    },
};