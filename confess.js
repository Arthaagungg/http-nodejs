const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    id: "confess",
    run: async (client, interaction, config, db) => {

            const modal = new ModalBuilder()
                .setCustomId("confess-modals")
                .setTitle(`Confessions Anonymous !`);

            const ModalConfess = new TextInputBuilder()
                .setCustomId("inputConfess")
                .setLabel(`Input Confess :`)
                .setPlaceholder("Ketik Confessions Disini..")
                .setRequired(true)
.setStyle(TextInputStyle.Paragraph);
            const Confess = new ActionRowBuilder().addComponents(ModalConfess);
            modal.addComponents(Confess);

            await interaction.showModal(modal);
      
    },
};
