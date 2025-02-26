import React from "react"
import {Modal, Input} from "antd"

const EditModal = ({
    isModalOpen,
    editedText,
    setEditedText,
    handleSaveEdit,
    handleCancel,
}) => {
    return (
        <Modal
            centered
            title="Edit Task"
            open={isModalOpen}
            onOk={handleSaveEdit}
            onCancel={handleCancel}>
            <Input
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
            />
        </Modal>
    )
}

export default EditModal
