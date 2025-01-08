import React from "react";
import useAccountStore from "../../../store/useAccountStore";
import AccountRow from "./\bAccountRow";

const AccountInfoInput = () => {
    const accounts = useAccountStore((state) => state.accounts);
    const updateAccountInfo = useAccountStore((state) => state.updateAccountInfo);

    return (
        <div>
            {accounts.map((person, index) => (
                <div key={index} className="max-w-lg mx-auto p-4">

                    {/* 신랑/신부 정보 */}
                    <AccountRow
                        label={person.role}
                        accountInfo={person.accountInfo}
                        onUpdate={(field, value) =>
                            updateAccountInfo(index, "accountInfo", {
                                ...person.accountInfo,
                                [field]: value,
                            })
                        }
                    />

                    {/* 아버지 정보 */}
                    <AccountRow
                        label="아버지"
                        accountInfo={person.fatherAccountInfo}
                        onUpdate={(field, value) =>
                            updateAccountInfo(index, "fatherAccountInfo", {
                                ...person.fatherAccountInfo,
                                [field]: value,
                            })
                        }
                    />

                    {/* 어머니 정보 */}
                    <AccountRow
                        label="어머니"
                        accountInfo={person.motherAccountInfo}
                        onUpdate={(field, value) =>
                            updateAccountInfo(index, "motherAccountInfo", {
                                ...person.motherAccountInfo,
                                [field]: value,
                            })
                        }
                    />

                    <hr className="mt-8 border-gray-300" />
                </div>
            ))}
        </div>
    );
};

export default AccountInfoInput;
