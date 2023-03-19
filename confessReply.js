const { EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

module.exports = {
    id: "confessReply",
    run: async (client, interaction, config, db) => {

            const modal = new ModalBuilder()
                .setCustomId("confessReply-modals")
                .setTitle(`Confessions Anonymous !`);

            const ModalConfess = new TextInputBuilder()
                .setCustomId("inputConfessReply")
                .setLabel(`Input Confessions Reply :`)
                .setPlaceholder("Ketik Confessions Reply Disini..")
                .setRequired(true)
.setStyle(TextInputStyle.Paragraph);
            const Confess = new ActionRowBuilder().addComponents(ModalConfess);
            modal.addComponents(Confess);

            await interaction.showModal(modal);
      
    },
};
