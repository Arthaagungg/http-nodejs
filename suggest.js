const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    id: "suggest",
    run: async (client, interaction, config, db) => {

            const modal = new ModalBuilder()
                .setCustomId("suggest-modals")
                .setTitle(`Suggest for server !`);

            const ModalSuggest = new TextInputBuilder()
                .setCustomId("inputSuggest")
                .setLabel(`Input Suggest :`)
                .setPlaceholder("Contoh : Turunkan Harga BBM !")
                .setRequired(true)
.setStyle(TextInputStyle.Paragraph);
            const Suggest = new ActionRowBuilder().addComponents(ModalSuggest);
            modal.addComponents(Suggest);

            await interaction.showModal(modal);
      
    },
};
