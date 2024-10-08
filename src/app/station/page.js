import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaVideo } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

const Station = () => {
  return (
    <div className="w-full h-1500 flex flex-row bg-black">
      <div className="w-3/12 h-auto">
        <div className="w-full h-1/3">
          <div className="w-full h-3/6 flex items-center justify-center">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAAD6CAMAAADXwSg3AAABzlBMVEX////71KvjACz/95YjGBW4Zmb+2XL/2a//2rDmACz/+ZckGRbiACz/3rP8/Pz706v//ZoqHhrx8PAtIyAyKCXtAC308/Pn5ub/4Xb/2XLe3Nz11KwrHxv/4bYfFBAAAADFw8O2s7LY1taEgH/Rz89ZUU+opKPixKA4LiviwJx3cnIcDwxwamg2KCLOro3z8Jfa1YlMQTKBfHpHPjtSSkhSRDyFcWB3ZVdYSkGmknnsz6eZhG4oHyDSuZiOi4tpWUzGq41ENSymjXS4nYARAAC8urqcl5ekYWLaCzJ2aliNhW8tKyXUACbCvX7Xu2piXFvGtJRyXUyPd2FzZl+/n3+hjHuMgXhhU0zp06tEQEIUDxVSAReLOEK1o4diKzCMCSSgAClhTTxEIyKslZhUOjleNzrFBSyJLjmqYmJ/S0u5GzUvEhs3Iyh+CSY9ABNiHihnSEVKHSVkBBZmY1FsKjSVHTN8ABpcQj8hMy20AyhvGSlxUExjJjE/GBoWFQ5oNDt6c0yppGxjZUWRj2E6QDG3ACNNABtXW0BLAADj4I+iGTZ4clFfVzd2NjZ2ZT20oFiehlDizG9AMx0UABJWRSWPf02jnG0wIQ7GqFxUQyeXm6XwAAAbgUlEQVR4nO1diV8aZ96PSpxBnEEYDssABeUYTo/hvgYYJbgpEqm71matx2toY+Mmade0cZNdjdnta+LGmDZp+t++z1wwHFE5BpPPy/fTWjsgPN/53b/nmee5dq2PPvroo48++uijjz766KOPPvroo48+PjagBotNd9WDaAWoWq3WT9gsFpttQq9W63Qoyr1gSNlJctZwtaO7HHQ6/YQ15Q6oMKPRqOKgIUgyUHSnHDbbpEZhNqsUpBW96oFeAB3DokhiKpXCrMBEUMk8ZqNKQZBGowwAMxIO9VUP9jwYHO4AoVEoFDIV86MG4ILCqNEATixURk3qo+Wis6UCmMooq+OgMCpkmIYFpiGw6guYxv1RGgxqcHgxs0olFoJRJcOwRIIgfERwhQqHgpgGE3PEZKTl4zMYQ87ODp0fpEqFaWRmDDMTkXAomk7eSjpjX61FMJVMDPAHZO4jUzLUaldhhMbIK45RgSW+TmgyVHztljOGwxAMw4gpSmJ11sNw1kx+TBEGtRU9ZmAGBNAflRGolIYIAlE4TSYEgaEBDng8IRBRJFRVTphi9uPhgjpID0OEAFatwQgsEoomnbgJgQdEwKOaKhMigRmrXFS5j8Ve1DmVGUiDcbXAQDRGXxRHYEBDKWYCJ4MCExUWpsOaRMX+FarAxFVz4KB3K8xVvwSCoiYYj9UIhAFSSlSkEIrBeDqSqBiOwpj6KFTMEvDIajws0J8EGXXWMoGdpPByIuwE5oPEKEWVP/kRiAW1kh5FLRNGYxLYCo1DVSZKhNbwblhBJNkXEGc4IdgLhqWu3FpQB4E1MGHGCyw7K+aCZD0qXmRx9jIEAS4Y/5cYQcxfNZMUk1JVmKiMCjGZkLPKBaETKl69XNAANBBLl8LxEPDbbKKGxenA1WYwupxMxAQYfAITxQvApSIXJZIkOCbBNATh/iy1EgqFKcLDuLyEpuQ0UVeqYmiOSQ+rTBJUaSUhiucKTbbqyPASxgYUegD2h4Jh2oUrY850iPAQ4RKthJD0lTrkeRATq3ZilJViA7E4VvG5AESyyiUWjZAEIAfTmXAahyDWXoBPxmg2H8CXrjBOTpAaERNME0cYm0iviJxAIoqILB9PriURZyiYhqsEYZzKpBkqMO29stiiLoIUpSqTRCgGcVF9xVwJ6wlaREU5ABIyPEQlRdeAZFxUkHEPcDKgvyImuhQweU110JTgrqBkkHdWwKSTdVEfiUbqL4H3hwE5yBmxXA0TEFAAk0p1kgg6uXsNMfFiQWMETlal8YSQ2mHDyUy6IaWB05o1hDWWq6EyEQARpZLcAsfEDBqC8ZgzmUzeCgdBgpxIUDGodtR4OATVMwF/FmbeiITcV8IEnQWFVsXvYlgJZ+06HacikWAmsxIxR8LhuLNOAnCarFcvTlYEkBUSt1+JC7MYMVWl34AlwuCuwqYkFQzRQCjOW3EKFC1rJlPdmPGFMN7IBFynFnBgRuRVVMZ6u0pRCexGbAVEddgZikRjoNwC1gKbTDGaAoG91lSQWwRvKRCO40olruTCC5BWJgkha5pzcxe9RYrUBnVoFApNxXkFgdbAaSrurJSNygEYxtciZK3fNYWoGEtEmY6Hllhk/SAfA96L8kPwGnZevEdzvqIEXAx2I8hKuNxRgRE0yA/TESapF9eNEIgwwRrTMAXZRAZyhTJGjwe4OKPMOFNyMYJxxcDNwObPMRZDgA51P01Dc4CFgiATLBNNFgyFjjQ6WaBzYSIrtm6SfROdUVWSTvBbZBncADZ1yX45mco5HPMT6iZDdkRi6WLXg+gECeIJEU0HExhIhuNgIGmqCRPGJOKaeFUoaxEmjGZ9KnEvzKgwlnifDbv8y8t0Nvvn+F+shnoX4C7hEgTRHCgxmPqcjiQS4L8QyD2izRwTywWjhUhiilI4pKQzxtpeGChyQrxiQiyUSqWL/kvKahDLBg3QCBSxdpmJDrgvVQRUtUpXtkQzd7QUUtYygGGEAbChGBV08VeR9J9xxJ9R1Xf1FCpVtsFHx/zxYk6kT+oASEKpbifPDoVKponD3JAZ/0Ov1ER1aMCVzgLQyy4cQlxEXPSSs8LEA1AhM5NsSAIg2FmKOCrJ8kTQBUGhSb1Ox0w4dYmR2gv0i6PCwUWJKiygJK5QEGQ0nrk5WWaJdiF+l+jFLN/jN8+RXi/pMQvGn21iahBw8LOCYKybQJHjhNftds8C32C1NPUNLcLGdIE0peo30iuu6j2FY3REwYHp5PuW/Ej1Rci5yVm8xzxr06tt3gqXpVgjFdYFClxywM4GknR6DYDOlsIrX846OvZnVgLcWFC2C9+Hh+JVS0HSmz5xea9Q+UQ3HKJ97Gtmj4O9pWrvHP++jLNJmgn+IFbycq4sxSbZENNGB1oN4199tWbstG2udrNfTgm3EUpGqoqO0z5z3SwRUJ7KyPASbydCDmxTcWIx+/xNqTAu0M1wQd1iFYRxFx3K2DudypwIMDriqVRaSLYqIIT2yRr9U0YYJnBnrH6ZjRb+w1BeLCofjdQ6wSqXMNOEVRdF+RyeDkWKk7XOuh1Y2dTeU5EKTFUDRzIja4RCtcSPEr7lY6l4qm3V2Tk+TpZMzakwbXMHSFtWRelcjFq1qDtvBKCzMoVYKnAyIhg9nPRVRGL2eOYEX6tQLMPCGzgqdiEv1JPcm1TmUn1BUJULTRrU7oi41ZkOe+c7LwjUJOtOzSs8FSQa5L8Ewpc8AhUP5k1NBnj/pFBs8oNyRdi601PpRDrmzLyCLTdLfHh9KhW9tR0BGKfD7vNyz0thgp9tFGwdjq/wVODlilDm7FY1qjOkMH6gRj83kNgSZyv81JDaQQiS+4AH4z7YmallAiGgHop33GV2cHdeEeRtGQ/x1TrEj5O563xhoeYtQaHKsu9R4gu8w8JmbeqJVNFYifebTeMKDyRa0ySAXPGFpaWIpkMquiLnohTkMs8gzXOCgfcSmAixy8KLxcPXwXiWl6l5bg4YE69d4NN80Q8LhVFdqqY1mP3a7bB2vNrHwE/4KIj6L8dDwh2eq+SvwKq5kMg7Cci1KcRPs1ngwRhTxHUeFXCbIknEmRV02hnuRpvJQvANo0S8NpmFnMJUo9lTcS7qwBx7UbXJDxWiVbXz9iyMKvpcJky7L5KMgiKNLdFcLleo8xQZdVSWfIRqqcB+wejNROVr5gW736zc9SVzPReQZ5fOZ8LMk9/+q2/Sag+B9BgKkaGQquPKRZcSmCTqqCB+YWhmjaDFzCwlh2oXFqiYuGBh0k5fCL+ICrz2TX598po+t5J1mrLF+VzK1qlY1O5K72updt4U8VfkxduK2iEwUSiqvEEJ4GMKR2Zi3Gg0ylSyYNbVMPQGKslIfsOtu4baZsPppL0bnRd9UbidWKQ2EgAFE9quHjJlMRisRbMgE5VMZAsQnl7yKebMCqb2MgaXLkGEzd427rDOVz3/5YKx83lLcE80hIZb3aEK1hV++GbFJXk+/3wO/CNyULW3GMGTdCkUT9OgMEOQi5SL4x/yCJaOWnMdS0WdIxeia9EwS0ZB1lGBS+JFYFVPC1gr6mtECEbgAeSSNPhPX+1iP0+XwtI4AiOxOMYMup4KlPY18bOMUMxLzZNepfIDyXATIPHZLnYoHMQtNuRCJjqjkpnrqTB1VTMuKtnm+fHvklQmu8dkgqxMxsF0JmEm6qlAeKkxZgBXWzonU7wslKZsqmtMULcokOBxjUJzq36EME55QMxgzMTM5CXA3cp8S8vwh9P3y8MU7R6VedIldqhUQtNkJs5FecxmI6jXjT4fEzI8m8uNS5DaApJtM+1CLfULgA32uHh+AXYRniatKwj3xzdnMj5fxmf0ZTaXaBxpeE97gEqO9qhMFJfqFmhZg3URMauonzLl7h4Uc/n9/mU6S/vxge5IZICtUNtLutBcyPWlRXxFN1uq+/BYONL8jkNVdIsIE+03LU2HehHUdhroptiPGyL1fSrIFW7s80oGkOW3FyHBwJHlSbG1OKjGTCl2+QDXMWC62F6EtK24YNeX4ttQjF/8dVICD7Xpiy2UC1KWRHamC1xQ5kkMUKJa2qcC0d6qSC0zl8nEpQPQrza79kDBIMi/UjUWx2YP7aIJkFbXiqFqg8Gg16uvWZgJExdlE17QucMSU4Hg8xQYblG/9I7ZYsBuLxa9qSLTy1GGmPiqs1p113TSWj2EmJxJJ2L6YPWCZFvSL7S4mU0nnQDJW3Sa+YLsJBCqbWv9r/8zv0p3LW43YeKMR37a3o6Eo/WreypvyLSUtaDeuMmEMFNKoLhjPhJOEzmL3nYnLy9/+/U5zelOAfsjd+7e+O7GjbvbkXTT1gucJVsz+okvS6BIHKhUdnCajIe9s9tlrXbn+6YLDLoC4GfvXudxl4w2WZgEJ2dazYr1Dm+YjlUSK8iVNuFO6mFeLt+594HptW4gVGFy/fqN7XjjpLeTKrbeHlbPT67EKy11CAa1b2hdPgioSJZuQekH16+LudQvy4AGwqttLUC2rGZEFZYSTm6VtZJSGcjevV7D5Se6lokyTrQ1J2QJlGp6jvCfduWsVCRTMGXpxvVaLivixALkT7J2mOgcGVoUqlwuOA381+igvPw3ycwer6dy/a54HYlribS0IRJ1LuiHKwUTqEciUWpPOzg4KM/fli5Exu/WUbnxD0HFIaWfWm2HCah5/TDu8rt4bxy3527ez8sBlcHR3R+lSlwg+kEdlesPotw63wF/KeNpr6J3BEuhcMTIzR9A/qDFsrXDMhmUPyabGYuQOHVU+brCDRpWQsBHxugFYutpi7FRgM6aclgcmiwb65VUSl18NMhTyT+MN4gFgl20HwcKGUs6IQiP4RBcU9WDnzhAk1K/hnmjWO6G4FgyGrl3e2PnftvNL/SabpLCcaBi0DJpuzb5A2P0LJe9YL1YYJyOfE/Ecefaj0EqSocW4vQtkMIlGTCPp+LOdDQeDzFXecRwHKRFeAXs7+AHVWctDyLxheDD3Z18ftfewdoiR/CrZJikEZyaRa8ZAo9GBbHcX6hJj2AkufDzbnlP8+MKsff4xZ3t/Y2Nb//1gMVPP0WohT8trGT+vr6zsf737WAwEiTBD3CRwYIA9vc/RdcWbtao2A3in1v7G/lBrXa/Le/Fw0DE46Q9ETXRGFPZTxTv57UsGfnO0xAuOGQI3PJQ4v6OVq4t7+3ktVo5gFbLvJP5TT5a3nmx9+LxKHNNy/wvQP6L/M6L9UePHq2/4LEHft/be7S7u7+/LZLLdz/tl8EHywe1L37uZEZI77Z7LfOEM0Z5uf/PffOYF8zO04VkDKTNQCOcayHy9s4o66e1PFVOeDy0Wo5EzUX+aj3ko6OjO988EARz46f7ZS37Z+Wnna0qVhvU16zEV1GCryDR+eKjUXa08vJ+cCG6disdXVjZ2t/J8wPlbKkBYHzNLgqvgH9H+X9Zrvm9O/+4ceO77248IPbz3Ju1j292PjdkDa5lqqW0PvXkMSeAwfL6kztbW092NwAPeXMKbUIOaqLt7Tvb2082eCUYHF3vwiMgE3aipmFsKT55zA5dqx3N5/OjvE51F1p5/osvvsiPCp8NHE0X1hSjE5baNr4+R7I3a5TT+w8pVUcYHZQL5sXdtg1Skkc+UQu5PiqBKJrjizJwX+WnUj1aaCju5nvERV7+pqzNP52V7LGcCe9+r7iMfvttfr/7z0RUYfDu5rvstz4A+c7W7pZFOiaMVwbhUgrn1UBl9OE/JyV+gM02+y+QG0lPRrtx0yItE1AGzDNkJOciL291+zmVZmRs3h/yWqm5jO66e/GEpNp7O6+V2P7lj4mePBmtn7yzXs5L6gDk+dttztK3CLUtVfzXOpdjSkRl8FFPNAwA1dtS24/K0glG/ribq78ugjq3Kl3MBKGlNxrGAbW5tzak0jLtupSZSyPU1oBUnlme3+rxFjUT3vuPpdEx+bq7x5tu6FLEhiSpjHZHmtLrPC454oUUVSVIXiw9pnJN57i3IQWVXkXJGhQlKcpAHtZ7KpP3yxJQkW8Eer/ZjkMSKtrHRO932bI8lUQq+ds9KFrqYCCksPtB7Q9SV8WNUBfXJaHyore5CwN08pEUkUVb/tkGfL2+l9vUoLn7eQmoyPMPUzqLnejpVtTWbSnsflS7t+rWHBQOEj3kYiGloAKM5WvscGpsaqaTGckWMUH+u9tUmEmy8t+eF8bGhsbeJXqX7xsCO92kwkx75POjO98/mx4bGRoam/b1zisb7C+6R0Uuz5f39u/fv33v4HhsaGhoZGzqpFc9C+YJw72uUZGP7ux+/8vRy8+fAzMBRI4LQyNHAYNar9cb9NIzUrv3u1QWywfL+8SzQuHlzMH0yAgjk8LC8fHBr2SAZCD97u1o6nZ3iIyW97YOCtNHMweFIUa5AJV3xMsZkgpl6WW/31+SYoOwWjiedqFiAUby4uEvh4WjHw8KU4y9M0ymTjLhLLM9D7tIBg/lpE78rfc6Dixy7ejGfxJHx1Mvj6YFIsB7Fci0srq8B1ouSp3GWMgO+y7ywfzGw+dHxyCMDI2NDQkYGXpW8zATREtOxbDaFhVmJcso+7O8fv/50fQQa+hDVYxNZ2oWPEHcTjtSQh9og4pWW368sbe38fjfj/f+QwK1GhGz4CzlaKV2U/ew5Lud64obrVIBktj9XnPz+fObN32ZmSPgeuuJACrTM3XPAgQlLyx13r3WKha5vLx/75ejwjGD6eOpsbFGIoxQqJp17ZArYLt4MJ0Bnd1thYpcm9/7/vnh8cgYoDDG/GhChBFK3a6JsAQ7HDYgtd8CFa12B7jdJrZRh7EjqnafGqQXmzc7frj0EhgmN/n55bTI5X4AI1MzdY/2mrI9aInP/+8lwz0wkt17TKZ4gUQYoUzXPeurNEV7QMX28BLemFlyWN772/N30yMXioShchiuezDHFG3j6Y9Wod9uWnzVLJeU5/Plbx/ePDq+yEZ4/Ro6qt/F2ZTtga2oycbAwtRQL3YfPdrd3Xux82Lv0e4T4uYvR9NN/W4zKlMn0brnrZF4L2owe30rDCTsG/tbkYODo6Ojg5cvf3wJfjksHF9KtTj9KmTYp9jEx1KUelEZF/fztRIp7z4EVcfxFDOqqanj46kp4HxHLikRVigHFALyemf1aRbYGenFWQ1u8RwLyHP3tgGPMV6ZRlgMXZoGL5Q07vLHg5mssL1dNjPXi/MNUvcFKsxq7707LwtDF0eO8zB1QGYpUpVIeYPsswoD/iWPnejFRJj1KbNmG7hbeX5n95tqGdguxqaJROTo8KSoswYhCIac8QyWMnh7QUVv/yEPCkHgs55ELpGTXEzlaAb4iOMTx7X5II4n4xmZ3YZeS3VvA5RzYAvc++9//7v07KjQPM1tDcATHwEfUYjor9lIKphYnWRPl8vVRntUJ4npqN2/FArTwFN1zoMRyvRMAeTLh14UyDvhdhg4Co6AQ7Rzpt4xKckZjYbVQ5CwNyug2qJSmDkeA/6YeeA25a1k9lZPghA2BUatdt9vGSlOobAmpjvyWLVgm5Ign2QqLVv1ECPr538svuJqFr2beHs2frra/UwGzRHH3REIB8bext5xWxkXK37LOvd6/OwPECdRy+rJ4vj48GsJTqFAU5tTLVO5wD+MnHAR0VHRMIfndHj8lDSoc/denY0Pj7//XQLvjKZOWqYyNl0472/GjgkL+9kGUhiw4/f3w8NnJ15vAijXZ+OLb6RI+tHUTOtUXmamgaMYay6ckbF3fP8Ozdl5R5V7szgMZKH4Y3Ec/HdR45Wi1EdTmeMWzR4UvL6XR+8OgQuf4psVIzUvnwjuycY9iYcavEYgleHhU8Bk/OzU55XmCZecr1WzH5v+1Ztz5GaLwZODo8NpJnee4jswLA4ra4313hzzgFDO/uvm4jCH8cUDmVTtF0erzhhUiQnga1FUrbdZJ71fLvxIzZwcHk8dTxcKhwBHK5X2HZoi561uje/k9IxncvY6k5Ds2F8LUWiRyvGJqJcNCBkmLI7iysJfUrmcA8Ba3foATXl8b3579X54XCAyk3B3vLHpBzEBon1LVMYKqsZQrZ8w6HUNpyzoi3+8XxQEMjy8+Erj7sLO3x+EYfVdS1RGRt7NWS752davT8cFHuNnr98ELJJ2KyZapTL1jLjkgNTFmYpIzk4zCemeAuNgW23NVkDue9kFhfOJt4JQ3p8kvFapG0iWey15sJGxw0tvcOD1MRFx+DOgW77VHhy9flFmPMI0K8aqmJ657MGwetmrMy6UnMz14qxyNKf5QIhkOYyMMQFw6vh4mkWhcJQpWi750dY5xujHxw8xwtGLVRVNExcuHWEoTBeOXj47Odmc4UCuFq2XDtUpkHiNj5+99dh7c+R6QzrJaNMQEELh3dHBs5lMhooHiRQIfAzmLQ3HQ52D1G8MkTdz7h6dV8pKhe3bcQAKNf3uWeamjyBJKhSnnSZTuM0ZBeubU5CmeHsjEvYLZYdMK5UzienC4cEMQYaz6WTS6cSZ/dhgPNNml1Tvtq+653u4fFrvVrx8B5LAA2ATmzNEJhKnkzjCncbD9kmdbbcW1YaJ3p5YqLYWNRoiUHSnZhNU2hkbYLcxrm6cRmssPR1PZ1Cr2R6b3p41Ney3A5cCV3EYZIfQeRvPVYBiS1dz2miHmF2qZzIAuVrbpPBjQY5qOBcGSvskXwghBayZht3kP1UqtsbzxqCkJO1dyaGX0QP1VGJh4lMUi44oNewmBsc/l37ZkAQoNh4igYdXA95PMLLkgvU7OUPOyKQV68n8W3dhI9L1e7z5ffNoymO56pG1DHUxHKvZaxnCQ4QeXA70qOboHlAruZSOVY6KhpBYnGSKWZun08Mqew/U4iaoqBMxwezx3WmK5Fo+k7LePyDYOQw5OxkJpZ3pP1PB1RRfyeuLKq879ek5ZbUl5yZVHs9k9QR0NKV6+/YP4hN0yqh6wlFUeKstXp37ZHj89BN0ZAxQtaVIFoWTkQ2B1+Pji1JMhvYGavfc517uTFeL5nR8WJJ53d7ASrx6fZJZZU6tY+dF3//e4x00uofc7++HzxZfz6ymLKtM+/dU9em5MB62xFt+jifhY9q/p7KeP+bcLaAp7DXDZXzxlJ2rfq34BJ0xD72bnW//bHycnfJ5S/T8OfruwfHr6+HPKnNwr+xXPZ62oc4RB5Vp0eHhxTefYNnCQe/2vT0TUXlv/ETDCjpfnDkdFuNU82n6YoOXeCUWCTCZt/ZP0YGh1tWT9+NiJiC8vOn9RiCdA3UQIiv57DMmtpy9au88givGvOb1ODu5K+Ds9PVvRO9m4rqI2d9PF8/OFt+fvn71amlzJkOQdm8PlhBIAVuRyPzxxwy5ai+6J3MO67ytBw//SwS9bd46b7FN6Jn5sE+WRR999NFHH3300UcfffTRRx999NHH/1v8H2DIABl2RI3EAAAAAElFTkSuQmCC" 
              className="w-40 h-40 rounded-full"/>
          </div>
          <div className="w-full h-1/6 flex items-center justify-center">
            <span className="text-white text-2xl">박준수(jackpot1234)</span>
          </div>
          <div className="w-full flex items-center justify-around h-2/6 px-14">
            <span className="flex text-center text-white text-xl">열심히 코딩하고싶은 백엔드 프로그래머 박준수입니다</span>
          </div>
         </div>
        <div className="w-full h-2/3 flex flex-col items-center pt-5">
          <button className="w-3/4 h-16 flex flex-row items-center justify-center bg-white rounded-2xl mt-5 text-2xl text-black"><CiEdit className="text-4xl"/><span>글쓰기</span></button>
          <div className="w-full h-96 flex flex-col px-20 mt-10">
            <span className="text-white text-2xl">VOD</span>
            <span className="text-white text-2xl pl-12 pt-5">전체 VOD</span>
            <span className="text-white text-2xl pl-12 pt-5">다시보기</span>
            <span className="text-white text-2xl pl-12 pt-5">하이라이트</span>
            <span className="text-white text-2xl pl-12 pt-5">업로드 VOD</span>
            <span className="text-white text-2xl pl-12 pt-5">업로드 클립</span>
            <span className="text-white text-2xl pl-12 pt-5">유저 VOD</span>
            <span className="text-white text-2xl pl-12 pt-5">유저 클립</span>
            <span className="text-white text-2xl pl-12 pt-5">별풍선 클립</span>
            <span className="text-white text-2xl pl-12 pt-5">재생목록</span>
            <span className="text-white text-2xl pl-12 pt-5">Catch</span>
          </div>
        </div>
      </div>

      <div className="w-9/12 h-full flex flex-col">
        <div className="w-full h-2/4 flex flex-col px-6">
          <img
            src="data:image/jpeg;base64,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"
            className="w-full h-96 border rounded-xl"></img>
          <div className="w-full h-2/6 flex flex-row justify-between  border">
            <div className="w-2/5 h-full flex flex-col items-start justify-around py-12 pl-5">
              <span className="text-white flex flex-row text-4xl">BJ박준수
              <IoIosInformationCircle className="text-white"/>
              </span>
              <span className="text-white text-xl">광소,스폰 문의: 010-1234-5678</span>
            </div>
            <div className="w-2/6 h-full flex flex-row justify-around items-flex pt-16">
              <button className="w-40 h-16 flex items-center justify-around border rounded-md text-xl px-8 text-black bg-white"><FaStar />54.9만</button>
              <button className="w-24 h-16 flex items-center justify-center `bg-white border rounded-md text-xl px-4 text-black"><FaEye />99</button>
              <button className="w-20 h-16 flex items-center justify-around bg-white rounded-md text-xl px-3 text-black"><AiFillLike />10</button>
            </div>
          </div>
        </div>
        <div className="w-full h-3/5 flex flex-col border">
          <div className="w-full h-20 flex items-start px-8 border">
            <FaVideo className="text-white text-3xl"/>
            <span className="text-2xl text-white pl-4">VOD</span>
          </div>
          <div className="w-full h-500 flex flex-row justify-between items-center px-5">
            <div className="w-8/12 h-full">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/3K3MMtoG8rY?mute=1&autoplay=1&showinfo=0&rel=0&controls=0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
            <div className="w-3/12 h-full flex flex-col justify-between">
              <div className="w-full h-2/5">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/3K3MMtoG8rY?mute=1&autoplay=1&showinfo=0&rel=0&controls=0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                />
              </div>
              <div className="w-full h-2/5">
                <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/3K3MMtoG8rY?mute=1&autoplay=1&showinfo=0&rel=0&controls=0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Station;